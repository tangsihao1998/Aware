import React, { Component } from 'react'

import './CartInfo.scss'

class cartinfo extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
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
                                <tr className="productShow">
                                    <td>
                                        <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} className="images" alt="product-img"/>
                                        <div className="InfoProduct">
                                            <div className="productname">Collete Stretch Linen Minidress</div>
                                            <div className="Action">
                                                <div>Change</div>
                                                <div className="line"></div>
                                                <div>Remove</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><div className="color" style={{'background-color': '#a4624c'}}></div></td>
                                    <td><div className="size">S</div></td>
                                    <td>
                                        <div className="quantity-picker">
                                            <div className="decrease">-</div>
                                            <div className="quantity-pro">0</div>
                                            <div className="increase">+</div>
                                        </div>
                                    </td>
                                    <td>$69.00</td>
                                </tr>
                                <tr className="productShow">
                                    <td>
                                        <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} className="images" alt="product-img"/>
                                        <div className="InfoProduct">
                                            <div className="productname">Collete Stretch Linen Minidress</div>
                                            <div className="Action">
                                                <div>Change</div>
                                                <div className="line"></div>
                                                <div>Remove</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><div className="color" style={{'background-color': '#a4624c'}}></div></td>
                                    <td><div className="size">S</div></td>
                                    <td>
                                        <div className="quantity-picker">
                                            <div className="decrease">-</div>
                                            <div className="quantity-pro">0</div>
                                            <div className="increase">+</div>
                                        </div>
                                    </td>
                                    <td>$69.00</td>
                                </tr>
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

export default cartinfo;