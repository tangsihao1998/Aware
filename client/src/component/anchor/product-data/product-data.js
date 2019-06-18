import React, { Component } from 'react'

import './product-data.scss'

class productdata extends Component {
    render() {
        return (
            <div className="product">
                {/* Image  */}
                <div className="imagecomponent">
                <img src="images/img1.jpg" class="productimg"/>
                {/* Button quick shop component*/}
                <button className="quickshop">+Quick Shop</button>
                {/* Sold out component*/}
                <div className="soldout">Sold out</div></div>
                {/* Product Name */}
                <div className="productname">Collete</div>
                {/* Price */}
                <div className="productprice">$69.00</div>
            </div>
        )
    }
}
export default productdata;