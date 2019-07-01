//import component
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import scss
import './footermenu.scss'

class footermenu extends Component {
    render() {
        return (
            <div className="footer-menu">
                {/* Split out Component anchor */}
                <Link className="Link" to="/">Home</Link>
                <Link className="Link" to="/product">Products</Link>
                <Link className="Link">Services</Link>
                <Link className="Link">About Us</Link>
                <Link className="Link">Helps</Link>
                <Link className="Link">Contacts</Link>
            </div>
        )
    }
}

export default footermenu;