import React, { Component } from 'react'
import './cart.scss'

class cart extends Component {
    render() {
        return (
            <div className="CartIcon">
                <button className="Cart"><i class="fa fa-shopping-cart"></i></button>
                {/* Take data cart and show number of product here */}
                <div className="Oval">7</div>
            </div> 
        )
    }
}
export default cart;