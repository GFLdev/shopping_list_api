import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import api from '../../services/api';
import './styles.css';
import { useHistory, useParams } from 'react-router-dom';

export default function Products() {
    const [ products, setProducts ] = useState([]);
    const history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        api.get('/items')
        .then((response) => {
            setProducts(response.data)
        })
        .catch((err) => {
            console.log(`Aconteceu um erro inesperado: ${err.response.data.message}`)
        })
    }, [])

    return(
        <div className='product_container'>
            <p>Relação de todos os produtos</p>
            <div className='product_card_container'>
                {products.map(product => (
                    <Card
                    className='product_card'
                    key={product.id}
                    title={product.name}
                    hoverable={true}
                    style={{width: 300}}
                    onClick={() => history.push(`/details/${product.id}`)}
                    >
                        <p>Descrição: {product.description}</p>
                        <p>Quantidade: {product.quantity}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}