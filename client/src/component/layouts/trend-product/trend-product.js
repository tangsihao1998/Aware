import React, { Component } from 'react'

import './trend-product.scss'

class trendProduct extends Component {
    render() {
        return (
            <div className="trend-product">
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + "/images/men-banner.jpg"} alt="Product Image" className="trend-image"/>
                    <div>Collete Stretch Linen Minidress</div>
                </div>
            </div>
        )
    }
}

export default trendProduct;