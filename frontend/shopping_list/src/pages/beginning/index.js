import './styles.css';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import Logo from './../assets/logo.png'; 

export default function Beginning() {
    const history = useHistory();
    
    async function listProducts(event) {
        event.preventDefault();
        history.push('/products');
    }

    return(
        <div className='beginnig_container'>
            <section>
                <img src={Logo} alt='Logo' id='logo' className='center' />
                <br />

                <Button onClick={listProducts} className='center'>Ver produtos</Button>
            </section>
        </div>
    );
}