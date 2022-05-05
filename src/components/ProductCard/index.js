import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css'

const ProductCard = ({addProduct, brand, id, name, price, preview}) => {
    return ( 
        <article className='productCard'>
            <Link to={`/product/${id}`}>
                <img className='productImage' src={preview} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <h5>{brand}</h5>
                    <p>Rs. {price}</p>
                </div>
            </Link>
            <button onClick={addProduct}>Add To Cart</button>
        </article>  );
}
 
export default ProductCard;