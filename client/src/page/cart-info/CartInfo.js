import React, { Component } from 'react'

import {connect} from 'react-redux';
import {GetCartFromLocal,IncreaseQuantity,DecreaseQuantity} from '../../actions/cart-action';
import './CartInfo.scss'

class cartinfo extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    // Handle Decrease Increase Quantity Of Product
    handleDecreaseQuantity = (index) => {
        if(this.props.listproduct[index].quantity > 1){
               this.props.decreaseQuantity(index);
        }
    }

    handleIncreaseQuantity = (index) => {
        this.props.increaseQuantity(index);
    }
    // ----------------------------------------------------------------------------------------

    render() {
        const {listproduct} = this.props;
        // Show Product From Local Storage
        const showProduct = listproduct && listproduct.length ? (listproduct.map((product,index) =>{
            console.log(index);
            return (
                <tr className="productShow">
                    <td>
                        <img src={process.env.PUBLIC_URL + product.img} className="images" alt="product-img"/>
                        <div className="InfoProduct">
                            <div className="productname">{product.name}</div>
                            <div className="Action">
                                <div>Change</div>
                                <div className="line"></div>
                                <div>Remove</div>
                            </div>
                        </div>
                    </td>
                    <td><div className="color" style={{'background-color': product.color}}></div></td>
                    <td><div className="size">{product.size}</div></td>
                    <td>
                        <div className="quantity-picker">
                            <div className="quantity-button" onClick={this.handleDecreaseQuantity.bind(this,index)} >-</div>
                            <div className="quantity-pro">{product.quantity}</div>
                            <div className="quantity-button" onClick={this.handleIncreaseQuantity.bind(this,index)} >+</div>
                        </div>
                    </td>
                    <td>${product.price * product.quantity}</td>
                </tr>
            )
        })):(<tr></tr>)

        return ( 
            <div>
                <div id="CartPage">
                    <p>My Bag</p>
                    <div className="Page-content">
                        <div className="cart-table">
                            <table>
                                <tr>
                                    <th>Product</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                                {/* Loop Take Product In Cart Here */}
                                {showProduct}
                            </table>
                        </div>
                        <div className="checkout-bar">
                            <b>Total</b>
                            <div className="Price-Info">
                                <div className="price-row">
                                    <div>Shipping & Handling:</div>
                                    <div>Free</div>
                                </div>
                                <div className="price-row">
                                    <div>Total product:</div>
                                    <div>$6.900</div>
                                </div>
                                <div className="line"></div>
                                <div className="price-row">
                                    <div>Subtotal:</div>
                                    <div>$6.900</div>
                                </div>
                            </div>
                            <button onClick="">Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listproduct: state.CartReducer.listproduct,
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        GetCartFromLocal: () => {
            dispatch(GetCartFromLocal());
        },
        increaseQuantity: (position) =>{
            dispatch(IncreaseQuantity(position));
        },
        decreaseQuantity: (position) =>{
            dispatch(DecreaseQuantity(position));
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (cartinfo);