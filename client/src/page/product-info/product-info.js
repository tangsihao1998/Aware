import React, { Component } from 'react'
//Import Library & Component
import Productinfor from '../../component/layouts/product-information/product-information'
import TrendProduct from '../../component/layouts/trend-product/trend-product'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import axios from 'axios';

//import SCSS
import './product-info.scss'

class productinfo extends Component {
    componentDidMount() {
        let id = this.props.match.params.product_id;
        axios.get('http://localhost:4000/api/product/'+ id)
            .then( res => {
                this.setState({
                    product: res.data
                })
            })
            .catch(error =>{
                console.log(error);
            })
    }
    constructor(props){
        super(props);
        this.state={
            product: null,
            
        }
    }
    render() {
       
        const thisproduct = this.state.product;
        console.log(thisproduct);
        const renderproduct = thisproduct ? (<Productinfor product={thisproduct} />):(<div></div>) 
        return (
            <div className="product-info-page">
                <div className="product-info">
                    <div className="type">
                        Ladies / Dresses / Collete Stretch Linen Minidress
                    </div>
                    {/* Product Information Components */}
                    {renderproduct}
                </div>
                {/* Reviews Part */}
                <div className="review">
                    <hr/>
                    <div className="title">Reviews</div>
                    <div className="comment">
                        {/* User Input Comment Box */}
                        <div className="comment-form">
                            <strong>You</strong>
                            <div className="inputform">
                                {/* Input Title */}
                                <input className="commentTitle" type="text" placeholder="TITLE"/>
                                {/* Input Comment */}
                                <textarea className="commentContent" type="text" placeholder="Add your comment here..."/>
                                <div className="submitcomment">
                                    {/* Rating */}
                                    <div className="rater">
                                        <div className="ti">*Rating for us:</div>
                                        <Rater rating={4} total={5} interactive={false} />
                                    </div>
                                    {/* Submit Button */}
                                    <div className="submitbutton">
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Load Reviews Comment in the Database to main screen */}{/* Reviews Form */}
                        <div className="review-comment">
                            {/* User Input Comment Box */}
                                <div className="User">
                                    <strong>Amber Arnold</strong>
                                    <div>30 Jul</div>
                                </div>
                                <div className="usercomment">
                                    <div className="commenttitle">Adorable but tight</div>
                                    <Rater rating={4} total={5} interactive={false} />
                                    <div className="subject">I purchased this dress thinking it fit loose as pictured, but it fits like a glove, although i still love the still and its very cute</div>
                                </div>
                        </div>
                         {/* Pagination component */}
                        <div className="pagination">
                            <button className="pagi"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
                            <div>1/10</div>
                            <button className="pagi"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                {/* Product Trend Part */}
                <div className="product-trend">
                    <hr/>
                    <div className="title">You may also like</div>
                    <TrendProduct />
                </div>
            </div>
        )
    }
}


export default productinfo;