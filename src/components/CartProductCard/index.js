import React from 'react';
import './cartProductCard.css'

const CartProductCard = ({removeProduct, name, preview, price, quantity}) => {
    return ( <article className='checkoutCard'>
        <div>
            <img src={preview} alt={name}/>
        </div>
        <div>
            <h4>{name}</h4>
            <p>x{quantity}</p>
            <p>Amount: Rs.{price * quantity}</p>
            <button onClick={removeProduct}>Remove</button>
        </div>
    </article>);
}
 
export default CartProductCard;