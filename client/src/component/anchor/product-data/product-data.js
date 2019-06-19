import React, { Component } from 'react'

import './product-data.scss'

class productdata extends Component {
    render() {
        console.log(this.props);
        const {product} = this.props;
        console.log(product);
        return (
            <div className="product">
                {/* Image  */}
                <div className="imagecomponent">
                <img src={product.imgs[0]} class="productimg"/>
                {/* Button quick shop component*/}
                <button className="quickshop">+Quick Shop</button>
                {/* Sold out component*/}
                <div className="soldout">Sold out</div></div>
                {/* Product Name */}
                <div className="productname">{product.name}</div>
                {/* Price */}
                <div className="productprice">${product.price}</div>
            </div>
        )
    }
}
export default productdata;