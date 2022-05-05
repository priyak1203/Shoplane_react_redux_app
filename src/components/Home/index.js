import React, { useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
import './home.css'
import { ProductsAPI } from '../../utils/apis';
import { connect } from 'react-redux';
import { addProduct, getProducts } from '../../actions';
import SimpleSlider from '../Slider';

const Home = (props) => {
 
    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(ProductsAPI);
            const accessories = data.filter((item) => item.isAccessory === true);
            const clothing = data.filter((item) => item.isAccessory === false);
            props.getProducts({accessories, clothing, products: data})
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    

    return ( <>
    <SimpleSlider />
    <main className='homepageGrid'>
        <h2 id='clothingSection' className='sectionHeading'>Clothing for Men and Women</h2>
        <div className='productGrid'>
            {props.clothing?.map((product) => {
                return <ProductCard {...product} key={product.id} addProduct={() => props.addToCart(product)} />
            })}
        </div>
        <h2 id='accessorySection' className='sectionHeading'>Accessories for Men and Women</h2>
        <div className='productGrid'>
            {props.accessories?.map((product) => {
                return <ProductCard {...product} key={product.id} addProduct={() => props.addToCart(product)} />
            })}
        </div>
    </main>
    </> );
}


const mapStateToProps = (store) => ({
    accessories : store.accessories,
    clothing: store.clothing,
    products: store.products,
    cart: store.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart : (payload) => dispatch(addProduct(payload)),
    getProducts : (payload) => dispatch(getProducts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps) (Home);