import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './topbar.css'


const Topbar = (props) => {
    const [toggle, setToggle] = useState(false);

    const cartCount = props.cart.reduce((acc, item) => acc + item.quantity, 0);

    return (<header>
       <nav id='topbar'>
           <div id='logo-wrapper'>
               <Link to='/'><span>SHOP</span>LANE</Link>
           </div>  
           <div className={`menuitemsWrapper ${toggle ? 'sideActive' : ''}`}>
               <Link to='/'>Home</Link>
               <Link to='/#clothingSection'>Clothing</Link>
               <Link to='/#accessorySection'>Accessories</Link>
           </div>  
           <div id='icons-wrapper'>
               <div id='cart-wrapper'>
                   <p id='cart-count'>{cartCount}</p>
                   <Link to='/cart'> <i className="fas fa-shopping-cart"></i> </Link>
               </div>
               <div>
                   <img width={"30px"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png' alt='user-avatar' />
               </div>
               <div id='burger' onClick={() => setToggle(!toggle)} className={toggle ? 'toggle' : ''}>
                   <div className='line1'></div>
                   <div className='line2'></div>
                   <div className='line3'></div>
               </div>
           </div>
       </nav>
    </header>  );
}

const mapStateToProps = (store) => ({
    cart: store.cart
})
 
export default connect(mapStateToProps, null) (Topbar);