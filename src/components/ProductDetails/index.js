import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from '../../actions';
import { ProductsAPI } from '../../utils/apis';
import Loader from '../Loader';
import './productDetails.css'

const ProductDetails = (props) => {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [imageIndex, setImageIndex] = useState(0)
    const [previewImage, setPreviewImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    
   

    const fetchProductDetails = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${ProductsAPI}/${id}`);
            const {data} = response;
            console.log('Axios Response ', response);
            setProductDetails(data);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProductDetails()
    }, []);

    const handleThumbnailClick = (index, item) => {
        setPreviewImage(item);
        setImageIndex(index)
    }

    
    // return ( 
    //     <>
    //     {isLoading ? <Loader />   : <main className='productWrapper'>
    //         <section id='productImage'>
    //             <img src={imageIndex === 0 ? preview : previewImage} alt={name} />
    //         </section>
    //         <section id='productDetails'>
    //             <h1>{name}</h1>
    //             <h2>{brand}</h2>
    //             <h4>Price: Rs <span>{price}</span></h4>
    //             <h4>Description</h4>
    //             <p>{description}</p>
    //             <h4>Product Preview</h4>
    //             <div id='productImages'>
    //                 {photos?.map((item, index) => {
    //                     return (<img className={`imageThumbnail ${index === imageIndex ? 'active' : ''}`} src={item}  key={index} onClick={() => handleThumbnailClick(index, item)} alt='product-thumbnail'/>)
    //                 })}   
    //             </div>
    //             <button id='btnAddToCart' onClick={() => props.addToCart(productDetails) } >Add to Cart</button>
    //         </section>
    //     </main> } 
       
    // </> );

    if (isLoading) {
        return <Loader />
    }

    if (!productDetails) {
        return <h2 className='section-title'> No Product with id {id}</h2>
    } else {
        const {brand, description, name, photos, preview, price } = productDetails;
        return (
            <main className='productWrapper'>
                <section id='productImage'>
                    <img src={imageIndex === 0 ? preview : previewImage} alt={name} />
                 </section>
                <section id='productDetails'>
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
                    <h4>Price: Rs <span>{price}</span></h4>
                    <h4>Description</h4>
                    <p>{description}</p>
                    <h4>Product Preview</h4>
                    <div id='productImages'>
                        {photos?.map((item, index) => {
                            return (<img className={`imageThumbnail ${index === imageIndex ? 'active' : ''}`} src={item}  key={index} onClick={() => handleThumbnailClick(index, item)} alt='product-thumbnail'/>)
                        })}   
                    </div>
                    <button id='btnAddToCart' onClick={() => props.addToCart(productDetails) } >Add to Cart</button>
                </section>
            </main>
        )
    }
}

const mapStateToProps = (store) => ({
    cart : store.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart : (payload) => dispatch(addProduct(payload))
})
 
export default connect(mapStateToProps, mapDispatchToProps) (ProductDetails);