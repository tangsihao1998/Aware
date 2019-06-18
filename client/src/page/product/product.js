// React
import React from 'react';
import Sidebar from '../../component/sidebar/user/usersidebar';
import ProductData from '../../component/anchor/product-data/product-data';
//SCSS
import './product.scss';

class product extends React.Component{
    constructor(props) {
        super(props);
        //State
        this.State={

        };
    }    
    render(){
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
                                <button className="pagi"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
                                <div>1/10</div>
                                <button className="pagi"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        {/* Product data component*/}
                        <div className="productlist">
                            {/* Product component */}
                            <ProductData />
                            <ProductData />
                            <ProductData />
                            <ProductData />
                            <ProductData />
                            <ProductData />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default product;
