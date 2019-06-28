import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './cart.scss'

class cart extends Component {
    constructor(props){
        super(props);
        this.state={
            dropshow: false,
        }
    }

    handleDropDownShow = () =>{
        if(this.state.dropshow === true){
            this.setState({
                dropshow: false
            });
        }
        else{
            this.setState({
                dropshow: true
            });
        }
    }


    render() {
        
        const {dropshow} = this.state;

        return (
            <div className="Cart">
                <button className="CartIcon"><i class="fa fa-shopping-cart" onClick={this.handleDropDownShow}></i></button>
                {/* Take data cart and show number of product here */}
                <div className="Oval">7</div>

            <div id={`${dropshow && 'enable'}`}className="Cart-DropDown">
                    <div className="cart-row">
                        <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} class="productIMG" alt="product-images"/>
                        <div className="content-box">
                            <div>New Balance Men's Street Backpack</div>
                            <div className="info">
                                <div>$485</div>
                                <div className="information">S • Black • 1 pcs</div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-row">
                        <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} class="productIMG" alt="product-images"/>
                        <div className="content-box">
                            <div>New Balance Men's Street Backpack</div>
                            <div className="info">
                                <div>$485</div>
                                <div className="information">S • Black • 1 pcs</div>
                            </div>
                        </div>
                    </div>
                    <Link className="viewcart-button">View cart</Link>
                </div>
            </div> 
        )
    }
}
export default cart;