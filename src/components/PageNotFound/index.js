import React from 'react';
import ErrorImage from '../../utils/404Page.jpg';
import './pageNotFound.css';

const PageNotFound = () => {
 
    return ( <div className='wrapperStyles'>
        <img src={ErrorImage} className='imageStyles' alt='404 Image' />
    </div>  );
}
 
export default PageNotFound;