import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import './styles.css';
import { Button, Card, message, Modal } from 'antd';
import { ExclamationCircleOutlined, EditOutlined } from '@ant-design/icons';

export default function ProductDetails() {
    const [product, setProduct] = useState([]);
    const history = useHistory();
    let {id} = useParams();
    const { confirm }= Modal;
    
    function showConfirm(product) {
        confirm({
            title: 'Você deseja realmente excluir este produto?',
            icon: <ExclamationCircleOutlined />,
            content: product.name,
            onOk() {
                handleDelete(product.id)
            },
            onCancel() {
                console.log('Cancel')
            }
        });
    }

    function handleDelete(id) {
        api.delete(`/items/${id}`)
        .then((response) => {
            if(response.status === 200) {
                message.success('O produto foi excluído com sucesso!')
                history.push('/products')
            }
        })
        .catch((err) => {
            message.error(`Aconteceu um erro inesperado: ${err.response.data.message}`)
        })
    }
    
    useEffect(() => {
        api.get(`/items/${id}`)
        .then((response) => {
            setProduct(response.data)
        })
        .catch((err) => {
            message.error(`Aconteceu um inesperado: ${err.response.data.message}`)
        })
    }, [])

    return(
        <div className='product_container'>
            <p>Detalhes do Produto</p>
            <br />
            <div className='product_card_container'>
                <Card className='product_card' key={product.id} title={product.name} bordered={false}>
                    <p>Id: {product.id}</p>
                    <p>Atualizado em: {product.updatedAt}</p>
                    <p>Descrição: {product.description}</p>
                    <p>Quantidade: {product.quantity}</p>
                    <div className='product_card_actions'>
                        <Button type='primary' icon={<EditOutlined />} onClick={() => history.push(`/edit/${product.id}`, product)}>Editar produto</Button>
                        <Button type='danger' onClick={() => showConfirm(product)}>Excluir produto</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}