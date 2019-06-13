import React, { Component } from 'react'
import "./navbar.scss"
import Searchbar from '../searchbar/searchbar'

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
                            {/* Login,Register and Cart */}
                            <div className="right-side">
                                <div className="LoginForm">
                                    <button className="Register">Register</button>
                                    <button className="Login">Log In</button>
                                </div>
                                <div className="CartIcon">
                                    <button className="Cart"><i class="fa fa-shopping-cart"></i></button>
                                    {/* Take data cart and show number of product here */}
                                    <div className="Oval">7</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="navbody">
                        {/* Hover and choose type */}
                        {/* Component Dropdown */}
                        <div className="item">
                            Men <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                            <div className="dropdown">
                                <div className="itemform">
                                    <div>Tops</div>
                                    <div>Bottoms</div>
                                    <div>Dresses</div>
                                    <div>Jackets</div>
                                    <div>Shoes</div>
                                    <div>Accesories</div>
                                    <div>Sale</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            Ladies 
                            <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                            <div className="dropdown">
                                <div className="itemform">
                                    <div>Tops</div>
                                    <div>Bottoms</div>
                                    <div>Dresses</div>
                                    <div>Jackets</div>
                                    <div>Shoes</div>
                                    <div>Accesories</div>
                                    <div>Sale</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            Girls <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                            <div className="dropdown">
                                <div className="itemform">
                                    <div>Tops</div>
                                    <div>Bottoms</div>
                                    <div>Dresses</div>
                                    <div>Jackets</div>
                                    <div>Shoes</div>
                                    <div>Accesories</div>
                                    <div>Sale</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            Boys <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                            <div className="dropdown">
                                <div className="itemform">
                                    <div>Tops</div>
                                    <div>Bottoms</div>
                                    <div>Dresses</div>
                                    <div>Jackets</div>
                                    <div>Shoes</div>
                                    <div>Accesories</div>
                                    <div>Sale</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default navbar;