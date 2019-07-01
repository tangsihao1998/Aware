import React, { Component } from 'react'
import Sizepicker from '../../anchor/size-picker/sizepicker'
import Colorpicker from '../../anchor/color-picker/colorpicker'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './product-information.scss'

// Redux
import { connect } from 'react-redux';
import {AddToCart} from '../../../actions/cart-action';


class productinformation extends Component {
    constructor(props) {
        super(props);
        this.state={
            quantity: 0,
        };
    }

    // User Choose Quantity
    DeQuantity = () => {
        if(this.state.quantity > 0){
            this.setState({
                quantity: this.state.quantity -1,
            })
        }
    }

    InQuantity = () => {
        this.setState({
            quantity: this.state.quantity +1,
        })
    }
    // --------------------------------------------------------------------------------------------------------------

    handleADDTOCART = () =>{
        const {_id,price,name,imgs} = this.props.product;
        const {quantity} = this.state;
        const cartProduct = {
            productID: _id,
            // Change On Screen
            color:'Red',
            size:'S',
            // Static
            quantity:quantity,
            price: price,
            name: name,
            img: imgs[0]
        }

        this.props.Addtocart(cartProduct);
    }   
    // --------------------------------------------------------------------------------------------------------------

    render() {
        console.log(this.props);
        const {imgs} = this.props.product;
        const {name} = this.props.product;
        const {price} = this.props.product;
        const {quantity} = this.state;
        return (
            // { Product Information }
            <div className="maincontent">
                {/* Some Image of product */}
                <div className="leftside-img">
                    <img src={process.env.PUBLIC_URL + imgs[0]} alt="Product Image" className="Image"/>
                    <img src={process.env.PUBLIC_URL + imgs[1]} alt="Product Image" className="Image"/>
                    <img src={process.env.PUBLIC_URL + imgs[2]} alt="Product Image" className="Image"/>
                    <img src={process.env.PUBLIC_URL + imgs[3]} alt="Product Image" className="Image"/>
                </div>
                {/* Main Image of Product */}
                <div className="main-img">
                    <img src={process.env.PUBLIC_URL + imgs[0]} alt="Product Image" className="Main-Image"/>
                </div>
                {/* Product information part */}
                <div className="product-infomation">
                    {/* Product name */}
                    <div className="productname">
                        {name}
                    </div>
                    {/* Product Price */}
                    <div className="productprice">
                        ${price}
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
                            <div className="quantity-button" onClick={this.DeQuantity}>-</div>
                            <div className="quantity-pro">{quantity}</div>
                            <div className="quantity-button" onClick={this.InQuantity}>+</div>
                        </div>
                    </div>
                    {/* Add to cart button */}
                    <button onClick={this.handleADDTOCART}> Add to cart</button>
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

const mapStateToProps = (state) => {
    return {
        // errors: state.AuthReducer.error,
        // isLogin: state.AuthReducer.isAuthenticated,
        // user: state.AuthReducer.user,
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        Addtocart: (cart) => {
            dispatch(AddToCart(cart));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (productinformation);