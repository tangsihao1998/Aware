import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
                    <div>
                        <img src={process.env.PUBLIC_URL + product.imgs[0]} class="productimg"/>
                        {/* Button quick shop component*/}
                        <Link to={"/product/" + product._id} className="quickshop">+Quick Shop</Link>
                        {/* Sold out component*/}
                        <div className="soldout">Sold out</div></div>
                    </div>
                {/* Product Name */}
                <div className="productname">{product.name}</div>
                {/* Price */}
                <div className="productprice">${product.price}</div>
            </div>
        )
    }
}
export default productdata;