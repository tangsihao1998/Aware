import React, { Component } from 'react'
// import Product from '../../../page/product/product'
// import {Link} from 'react-router-dom'

//import scss
import './small-banner.scss'

class smallbanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[
                {img:'images/men-banner.jpg',name:'Men',link:'#'},
                {img:'images/ladies-banner.jpg',name:'Ladies',link:'#'},
                {img:'images/girl-banner.jpg',name:'Girls',link:'#'},
                {img:'images/boy-banner.jpg',name:'Boys',link:'#'}
            ]
        }
    }
    render() {
        const contents = this.state.content;
        const contentlist = contents.length ? ( contents.map(eachcontent => {
            return(
                <div className="small-banner">
                    <img src={eachcontent.img} alt="Shopping Banner" className="shop-img"/>
                    <div className="content-banner">
                        <label>{eachcontent.name}</label>
                        <hr></hr>
                        <button>Shop now</button>
                    </div>
                </div>
            )
        })):(<div></div>)
        return (
            <div className="banner">
                {contentlist}
            </div>
        )
    }
}
export default smallbanner;