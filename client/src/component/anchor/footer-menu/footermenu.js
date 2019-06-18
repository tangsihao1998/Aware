//import component
import React, { Component } from 'react'

//import scss
import './footermenu.scss'

class footermenu extends Component {
    render() {
        return (
            <div className="footer-menu">
                {/* Split out Component anchor */}
                <div>Home</div>
                <div>Products</div>
                <div>Services</div>
                <div>About Us</div>
                <div>Helps</div>
                <div>Contacts</div>
            </div>
        )
    }
}

export default footermenu;