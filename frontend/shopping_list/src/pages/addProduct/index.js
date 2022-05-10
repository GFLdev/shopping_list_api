import './styles.css';
import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { message, Form, Input, Button, InputNumber } from 'antd';

export default function AddProducts() {
    const [disabled, setDisabled] = useState(false);
    const history = useHistory();
    
    async function handleSumbit(product) {
        setDisabled(true)
        api.post('/items', product)
        .then((response) => {
            if(response.status === 201) {
                message.success('Produto adicionado com sucesso!');
                history.push('/products');
            }
        })
        .catch((err) => {
            message.error(`Aconteceu um erro ao adicionar o produto: ${err.response.data.message}`)
        })
    }

    return(
        <div className='product_container'>
            <p>Adicionar novo produto</p>
            <br />
            <div>
                <Form
                name='submitProduct'
                labelCol={{span:8}}
                wrapperCol={{span:8}}
                onFinish={handleSumbit}
                autoComplete='off'
                >
                    <Form.Item
                    label='Nome do produto'
                    name='name'
                    rules={[{ required: true, message: 'Insira o nome do item' }]
                    }>
                        <Input />
                    </Form.Item>
                    <Form.Item
                    label='Descrição'
                    name='description'
                    rules={[{ required: true, message: 'Insira a descrição do item' }]
                    }>
                        <Input />
                    </Form.Item>
                    <Form.Item
                    label='Quantidade'
                    name='quantity'
                    rules={[{ required: true, message: 'Insira a quantidade do item' }]
                    }>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item className='button_container'>
                        <Button className='addButton' type='primary' htmlType='submit' disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form> 
            </div>
        </div>
    )
}