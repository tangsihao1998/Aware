import React, { Component } from 'react'
// import Product from '../../../page/product/product'
import {Link} from 'react-router-dom'

//import scss
import './small-banner.scss'

class smallbanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[
                {img:'images/men-banner.jpg',name:'Men',link:'/product'},
                {img:'images/ladies-banner.jpg',name:'Ladies',link:'/product'},
                {img:'images/girl-banner.jpg',name:'Girls',link:'/product'},
                {img:'images/boy-banner.jpg',name:'Boys',link:'/product'}
            ]
        }
    }
    render() {
        const contents = this.state.content;
        const contentlist = contents.length && ( contents.map(eachcontent => {
            return(
                <div className="small-banner">
                    <img src={eachcontent.img} alt="Shopping Banner" className="shop-img"/>
                    <div className="content-banner">
                        <label>{eachcontent.name}</label>
                        <hr></hr>
                        <Link to={eachcontent.link} className="linktag"><div>Shop now</div></Link>
                    </div>
                </div>
            )
        }));
        return (
            <div className="banner">
                {contentlist}
            </div>
        )
    }
}
export default smallbanner;