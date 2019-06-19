//import component
import React, { Component } from 'react'
import SmallBanner from '../../component/anchor/small-banner/small-banner'

//import SCSS
import './homepage.scss'

class homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="main-banner">
                    <img src="images/shopping-banner.jpg" alt="Shopping Banner" className="shop-img"/>
                    <label>OUTFIT OF THE WEEK</label>
                    <button>Shop now</button>
                </div>
                <SmallBanner />                 
            </div>
        )
    }
}
export default homepage;