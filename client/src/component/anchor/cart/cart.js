import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './cart.scss'

import {connect} from 'react-redux';
import {GetCartFromLocal,GetCartFromServer,CheckOut,UpdateQuantity} from '../../../actions/cart-action';


class cart extends Component {
    constructor(props){
        super(props);
        this.state={
            dropshow: false,
            listproduct: [],
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
    handleViewCart = () => {
        this.setState({
            dropshow:false
        })
    }
    componentDidMount(){
        console.log("componentDidMount",this.props.isLogin)
        if(this.props.isLogin){
            this.props.GetCartFromServer();
        }
        else{
            this.props.GetCartFromLocal();
        }
        console.log("componentDidMount",this.props.listproduct)
    }

    componentDidUpdate(prevProps) {
        if (this.props.isLogin !== prevProps.isLogin) {
            if(this.props.isLogin){
                this.props.GetCartFromServer();
            }
            else{
                localStorage.removeItem('listproduct');
                this.props.GetCartFromLocal();
            }
        }
    }

    componentWillUnmount(){
        if(this.props.isLogin){
            UpdateQuantity();
        }
    }

    render() {
        console.log(this.props);
        const {listproduct} = this.props;
        const {dropshow} = this.state;
        // Show Product From Local Storage
        const showProduct = listproduct && listproduct.length ? (listproduct.map(product =>{
            return (
                <div className="cart-row">
                    <img src={process.env.PUBLIC_URL + product.img} class="productIMG" alt="product-images"/>
                    <div className="content-box">
                        <div>{product.name}</div>
                        <div className="info">
                            <div>${product.price}</div>
                            <div className="information">{product.size} • {product.color} • {product.quantity} pcs</div>
                        </div>
                    </div>
                </div>
            )
        })):(<div></div>)
        return (
            <div className="Cart">
                <button className="CartIcon"><i class="fa fa-shopping-cart" onClick={this.handleDropDownShow}></i></button>
                {/* Take data cart and show number of product here */}
                <div className="Oval">{(listproduct && listproduct.length) || 0}</div>

            <div id={`${dropshow && 'enable'}`}className="Cart-DropDown">
                    {showProduct}
                    <Link to="/cart-info" className="viewcart-button" onClick={this.handleViewCart}>View cart</Link>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.AuthReducer.isAuthenticated,
        listproduct: state.CartReducer.listproduct,
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        GetCartFromLocal: () => {
            dispatch(GetCartFromLocal());
        },
        GetCartFromServer: () => {
            dispatch(GetCartFromServer());
        },
        checkout: () => {
            dispatch(CheckOut());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (cart);