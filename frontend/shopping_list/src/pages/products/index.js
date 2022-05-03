import { useEffect, useState } from 'react';
import { Card } from 'antd';
import api from '../../services/api';
import './styles.css';

export default function Products() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        api.get('/items')
        .then((response) => {
            setProducts(response.data)
        })
        .catch((err) => {
            console.log(`Aconteceu algum erro inesperado: ${err}`)
        })
    }, [])

    return(
        <div className='product_container'>
            <h1>Relação de todos os produtos</h1>
            <div className='products_card_container'>
                {products.map(product => (
                    <Card key={product.id} title={product.name} bordered={false} style={{width: 300}}>
                        <p>
                            Descrição: {product.description}
                        </p>
                        <p>
                            Quantidade: {product.quantity}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    );
}