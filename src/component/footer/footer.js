import React, { Component } from 'react'
import "./footer.scss"

class footer extends Component {
    render() {
        return (
            <div className="footer-container">
                {/* Logo Part & Options Part */}
                <div className="footer1">
                    <div><img className="Logo" src="images/Logo/logo.png" srcSet="images/Logo/logo@2x.png 2x,images/Logo/logo@3x.png 3x" 
                                    alt="Company's Logo"></img></div>
                    <div className="footer-menu">
                        {/* Component anchor */}
                        <div>Home</div>
                        <div>Products</div>
                        <div>Services</div>
                        <div>About Us</div>
                        <div>Helps</div>
                        <div>Contacts</div>
                    </div>
                    <div>
                        <a className="social-icon" href="https://twitter.com/?lang=vi"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a className="social-icon" href="https://www.instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
                {/* Privacy & Options */}
                <div className="footer2">
                    {/* Component footermenu */}
                    <div className="footer-menu">
                        {/* Component anchor */}
                        <div>Home</div>
                        <div>Products</div>
                        <div>Services</div>
                        <div>About Us</div>
                        <div>Helps</div>
                        <div>Contacts</div>
                    </div>
                    <div className="policy">
                        {/* Component anchor */}
                        <div>Privacy Policy</div>
                        <div>Term & Conditions</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer;