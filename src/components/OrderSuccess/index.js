import React from 'react';
import orderImage from '../../utils/order-confirm.png';
import './orderSuccess.css'

const OrderSuccess = () => {
    return ( <main className='mainWrapper'>
        <div className='imageWrapper'>
            <img src={orderImage} alt='order success ' />
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>We have sent you an email with the order details.</p>
        <h2>Thank You for Shopping.</h2>
    </main> );
}
 
export default OrderSuccess;