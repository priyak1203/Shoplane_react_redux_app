import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (<footer className='footer'>
        <div>
            <p className="footerHeading">Online Stores</p>
            <Link to='/' className="footerLink">Men Clothing</Link>
            <Link to='/' className="footerLink">Women Clothing</Link>
            <Link to='/' className="footerLink">Men Accessories</Link>
            <Link to='/' className="footerLink">Women Accessories</Link>
        </div>
        <div>
            <p className="footerHeading">Helpful Links</p>
            <Link to='/'  className="footerLink">Home</Link>
            <Link to='/'  className="footerLink">About</Link>
            <Link to='/'  className="footerLink">Contact</Link>
        </div>
        <div>
            <p className="footerHeading">Partners</p>
            <Link to='/'  className="footerLink">Zara</Link>
            <Link to='/'  className="footerLink">Pantaloon</Link>
            <Link to='/'  className="footerLink">UCB</Link>
            <Link to='/'  className="footerLink">LEVIS</Link>
            <Link to='/'  className="footerLink">Many More</Link>
        </div>
        <div>
        <p className="footerHeading">Address</p>
            <p  className="footerLink">Building 101</p>
            <p  className="footerLink">Central Avenue</p>
            <p  className="footerLink">LA - 902722</p>
            <p  className="footerLink">United States</p>
        </div>
    </footer>  );
}
 
export default Footer;