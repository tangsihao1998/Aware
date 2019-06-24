//import component
import React, { Component } from 'react'
import SmallBanner from '../../component/anchor/small-banner/small-banner'
import {Link} from 'react-router-dom'
//import SCSS
import './homepage.scss'

class homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="main-banner">
                    <img src="images/shopping-banner.jpg" alt="Shopping Banner" className="shop-img"/>
                    <label>OUTFIT OF THE WEEK</label>
                    <Link to="/product" className="linktag"><div>Shop now</div></Link>
                </div>
                <SmallBanner />                 
            </div>
        )
    }
}
export default homepage;