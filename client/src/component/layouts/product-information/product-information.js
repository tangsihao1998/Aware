import React, { Component } from 'react'
import Sizepicker from '../../anchor/size-picker/sizepicker'
import Colorpicker from '../../anchor/color-picker/colorpicker'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './product-information.scss'

class productinformation extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        console.log(this.props);
        return (
            // { Product Information }
            <div className="maincontent">
                {/* Some Image of product */}
                <div className="leftside-img">
                    <img src={process.env.PUBLIC_URL + this.props.product.imgs[0]} alt="Product Image" className="Image"/>
                    <img src={process.env.PUBLIC_URL + this.props.product.imgs[1]} alt="Product Image" className="Image"/>
                    <img src={process.env.PUBLIC_URL + this.props.product.imgs[2]} alt="Product Image" className="Image"/>
                    <img src={process.env.PUBLIC_URL + this.props.product.imgs[3]} alt="Product Image" className="Image"/>
                </div>
                {/* Main Image of Product */}
                <div className="main-img">
                    <img src={process.env.PUBLIC_URL + this.props.product.imgs[0]} alt="Product Image" className="Main-Image"/>
                </div>
                {/* Product information part */}
                <div className="product-infomation">
                    {/* Product name */}
                    <div className="productname">
                        {this.props.product.name}
                    </div>
                    {/* Product Price */}
                    <div className="productprice">
                        ${this.props.product.price}
                    </div>
                    {/* Product rating */}
                    <div className="productrate">
                        <Rater rating={4} total={5} interactive={false} />
                        <div className="reviews">| 0 Review</div>
                    </div>
                    {/* Product size */}
                    <div className="productsize">
                        <div className="size">Size</div>
                        {/* Size Picker Component */}
                        <Sizepicker />
                    </div>
                    {/* Product color */}
                    <div className="productcolor">
                        <div className="color">Color</div>
                        {/* Color Picker Component */}
                        <Colorpicker />
                    </div>
                    {/* Quantity  */}
                    <div className="productquantity">
                        <div className="quantity">Quantity</div>
                        <div className="quantity-picker">
                            <div className="decrease">-</div>
                            <div className="quantity-pro">0</div>
                            <div className="increase">+</div>
                        </div>
                    </div>
                    {/* Add to cart button */}
                    <button> Add to cart</button>
                    <hr></hr>
                    {/* Description about product */}
                    <div className="sizeinfo">
                        <strong>Model wearing size S </strong>
                        <br/>
                        - Chest: 36" <br/>
                        - Length: 25.75"
                    </div>
                </div>
                {/* Product have same company with main product */}
                <div className="trend-rightside">
                    <div className="company"><strong>More from</strong><br/>Zara</div>
                    <div className="trend">
                        <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="Image"/>
                        <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="Image"/>
                        <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="Image"/>
                        <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="Image"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default productinformation;