//import component
import React, { Component } from 'react'
import CategoryItem from '../../anchor/cate-item/categoryitem'
import Filter from '../../layouts/filter/filter'

//import scss
import './usersidebar.scss'

class sidebar extends Component {
    render() {
        return (
            <div className="usersidebar">
                {/* Category component */}
                <div className="category">
                    {/* Title static */}
                    <div className="optionhead">Category</div>
                    {/* Name of Item (Component) */}
                    <CategoryItem />
                </div>
                <div className="line1"></div>
                {/* Filter component */}
                <div className="filter">
                    <div className="optionhead">Filter</div>
                    {/* Filter Component */}
                    <Filter />
                </div>
                
            </div>
        )
    }
}
export default sidebar;