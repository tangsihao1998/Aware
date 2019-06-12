import React, { Component } from 'react'
import "./searchbar.scss"

class searchbar extends Component {

    state={
        
    }

    render() {
        return (
            <div className="searchform">
                <input className="SearchBox" type="text" placeholder="Search"/>
                <button class="SearchIcon"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
        )
    }
}

export default searchbar;
