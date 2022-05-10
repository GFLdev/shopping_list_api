import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useHistory, useLocation } from 'react-router-dom';
import { message, Input, Button, InputNumber } from 'antd';
import './styles.css';

export default function EditProduct() {
    const history = useHistory();
    const location = useLocation();
    const [productEdit, setProductEdit] = useState({});

    useEffect(() => {
        setProductEdit({ ...location.state })
    }, [location])

    async function handleSubmitEdit(product) {
        api.patch(`/items/${product.id}`, product)
        .then((response) => {
            if(response.status === 200) {
                message.success('Produto alterado com sucesso!')
                history.push('/products')
            }
        })
        .catch((err) => {
            message.error(`Aconteceu um erro inesperado: ${err.response.data.message}`)
        })
    }

    return(
        <div className='product_container'>
            <p>Editar Produto</p>
            <br />
            <div className='product_edit'>
                <div className='product_area'>
                    <span className='product_label'>Nome do produto:</span>
                    <Input value={productEdit?.name} onChange={(event) => {
                        setProductEdit((productEdit) => {
                            return { ...productEdit, name: event.target.value }
                        })
                    }} />
                </div>
                <div className='product_area'>
                    <span className='product_label'>Descrição:</span>
                    <Input value={productEdit?.description} onChange={(event) => {
                        setProductEdit((productEdit) => {
                            return { ...productEdit, description: event.target.value }
                        })
                    }} />
                </div>
                <div className='product_area'>
                    <span className='product_label'>Quantidade:</span>
                    <InputNumber value={productEdit?.quantity} onChange={(event) => {
                        setProductEdit((productEdit) => {
                            return { ...productEdit, quantity: event }
                        })
                    }} />
                </div>
                <Button type='primary' className='edit_button' onClick={() => {
                    handleSubmitEdit(productEdit)
                }}>Editar</Button>
            </div>
        </div>
    )
}