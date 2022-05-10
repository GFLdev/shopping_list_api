import './styles.css';
import { useHistory } from 'react-router-dom';
import { ShoppingFilled } from '@ant-design/icons';

export default function Beginning() {
    return(
        <div className='beginnig_container'>
            <section>
                <p>Shopping List API</p>
                <span id='logo' className='center'><ShoppingFilled /></span>
            </section>
        </div>
    );
}