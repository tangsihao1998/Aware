import React, { Component } from 'react'
import "./navbar.scss"
import Searchbar from '../searchbar/searchbar'
import Login from '../login/login'
import Cart from '../../anchor/cart/cart'
import Dropdown from '../dropdown/dropdown'

class navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navhead">
                    <div className="content">
                        <div className="flex-container">
                            {/* SearchBar */}
                            <Searchbar />
                            {/* Logo Company */}
                            <div>
                                <img className="Logo" src="images/Logo/logo.png" srcSet="images/Logo/logo@2x.png 2x,images/Logo/logo@3x.png 3x" 
                                    alt="Company's Logo"></img>
                            </div>
                            {/* Split out Login,Register and Cart */}
                            <div className="right-side">
                                <Login />
                                <Cart />
                            </div>
                        </div>
                    </div>
                    <Dropdown />
                </div>
            </div>
        )
    }
}

export default navbar;