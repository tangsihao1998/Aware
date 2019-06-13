// React
import React from 'react';
import Filter from './../../component/layouts/filter/filter';
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
                    <div className="usersidebar">
                        {/* Category component */}
                        <div className="category">
                            <div>Category</div>
                            <div className >All dresses</div>

                        </div>
                        {/* Filter component */}
                        <div className="filter">
                            <Filter />
                        </div>
                    </div>
                    {/* product component */}
                    <div className="main-container">
                        {/* mainhead component */}
                        <div className="headflex">
                            {/* Sort By component */}
                            <div className="sortby"></div>
                            {/* Pagination component */}
                            <div className="pagination"></div>
                        </div>
                        {/* Product data component*/}
                        <div className="productlist">
                            {/* Product component */}
                            <div className="product">
                                {/* Image  */}
                                <img src="" class="image"/>
                                {/* Button quick shop component*/}
                                <button className="quickshop">+Quick Shop</button>
                                {/* Sold out component*/}
                                <div className="soldout">Sold out</div>
                                {/* Product Name */}
                                <div className="productname">Collete</div>
                                {/* Price */}
                                <div>$69.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default product;
