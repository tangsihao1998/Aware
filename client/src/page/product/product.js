// React
import React from 'react';
import Sidebar from '../../component/sidebar/user/usersidebar';
import ProductData from '../../component/anchor/product-data/product-data';

//import Axios
import axios from 'axios';

//SCSS
import './product.scss';

class product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
            page: 1,
            pagination: 1,
        }
    }
    
    componentDidMount(){
        // Get Product Per Page
        axios.get('http://localhost:4000/api/product', {
            params:{
                page :this.state.pagination
            }}).then( res => {
                console.log(res)
                this.setState({
                    products: res.data.listproduct
                })
            })
            .catch(error =>{
                console.log(error);
            })
            // Get Page Number
        axios.get('http://localhost:4000/api/product/count')
            .then( res => {
                console.log(res)
                this.setState({
                    page: res.data
                })
            })
            .catch(error =>{
                console.log(error);
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.pagination !== prevState.pagination)
        {
            axios.get('http://localhost:4000/api/product', {
            params:{
                page :this.state.pagination
            }}).then( res => {
                this.setState({
                    products: res.data.listproduct
                })
            })
            .catch(error =>{
                console.log(error);
            })
        }
    }
    // Pagination Product
    decrease = () =>{
        if(this.state.pagination > 1){
            this.setState({
                pagination: (this.state.pagination - 1),
            });
        }
    }
    increase = () =>{
        if(this.state.pagination < this.state.page)
        this.setState({
            pagination: (this.state.pagination + 1),
        });
    }
    // -------------------------------------------------------------------
    render(){
        console.log(this.state.products);
        const {products} = this.state;
        const productlist = products.length ? ( products.map (eachproduct =>{ 
                return (
                    <ProductData product = {eachproduct} key={eachproduct._id}/>
                )
            }) 
        ):(<div></div>)
        
        return (
            <div className="productlist-container">
                {/* Component title read from database when user choose */}
                <div className="type-title">
                    <div>Ladies / Dresses</div>
                </div>
                {/* Main container component*/}
                <div className="product-container">
                    {/* Sidebar component */}
                    <Sidebar />
                    {/* product component */}
                    <div className="main-container">
                        {/* mainhead component */}
                        <div className="headflex">
                            {/* Sort By component */}
                            <div className="sortby">
                                {/* <div className="sorttitle">Sort By: </div>
                                <div className="sortdropdown">
                                    <div>Popularity</div>
                                    <div>Popularity</div>
                                </div>
                                <button><i class="fa fa-chevron-down" aria-hidden="true"></i></button> */}
                                <label>Sort by:</label>
                                <select className="sortby-control" >
                                    <option value="value1">Popularity</option>
                                    <option value="value2">Popularity</option>
                                    <option value="value3">Popularity</option>
                                </select>
                            </div>
                            {/* Pagination component */}
                            <div className="pagination">
                                <button className="pagi"><i class="fa fa-chevron-left" aria-hidden="true" onClick={this.decrease}></i></button>
                                <div>{this.state.pagination}/{this.state.page}</div>
                                <button className="pagi"><i class="fa fa-chevron-right" aria-hidden="true" onClick={this.increase}></i></button>
                            </div>
                        </div>
                        {/* Product data component*/}
                        <div className="productlist">
                            {/* Loop product */}
                            {productlist}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default product;
