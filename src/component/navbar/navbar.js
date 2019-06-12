import React, { Component } from 'react'
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="Rectangle">
                    <div className="Rec2">
                        <div className="flex-container">
                            <div className="searchform">
                                <input className="SearchBox" type="text" placeholder="Search"/>
                                <button class="SearchIcon"><FontAwesomeIcon icon="search"/></button>
                            </div>
                            <div>
                                <img className="Logo" src="images/Logo/logo.png" srcSet="images/Logo/logo@2x.png 2x,images/Logo/logo@3x.png 3x" 
                                    alt="Company's Logo"></img>
                            </div>
                            <div>
                                <button className="Register">Register</button>
                                <button className="Login">Login</button>
                                <button className="Cart"><FontAwesomeIcon icon="shopping-cart"/></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        )
    }
}

export default navbar;