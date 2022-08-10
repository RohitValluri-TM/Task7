import React from 'react'
import { useLocation } from 'react-router-dom';
import {IoMdStar} from 'react-icons/io'

function ProductDetails() {
    const location = useLocation()
    const {info} = location.state
  return (
    <div>
        <h2>ProductDetails</h2>
        <div className='left'>                                                                   
            <img id="pdimg" alt="productimg" src={info.images[0]}></img>
        </div>
        <div className='right'>
        <div className="product-info">
            <h2>Product : {info.title}</h2>
            <h2>Price : ${info.price}</h2>
            <h2>Brand : {info.brand}</h2>
            <h2>Rating : <IoMdStar/> {info.rating}</h2>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails