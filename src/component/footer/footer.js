//import component
import React, { Component } from 'react'
import FooterMenu from '../anchor/footer-menu/footermenu'

//import scss
import "./footer.scss"

class footer extends Component {
    render() {
        return (
            <div className="footer-container">
                {/* Logo Part & Options Part */}
                <div className="footer1">
                    <div><img className="Logo" src="images/Logo/logo.png" srcSet="images/Logo/logo@2x.png 2x,images/Logo/logo@3x.png 3x" 
                                    alt="Company's Logo"></img></div>
                    <div className="menu1">
                        <FooterMenu />
                    </div>
                    <div>
                        <a className="social-icon" href="https://twitter.com/?lang=vi"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a className="social-icon" href="https://www.instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
                {/* Privacy & Options */}
                <div className="footer2">
                    {/* Split out Component footermenu */}
                    <div className="menu2">
                        <FooterMenu />
                    </div>
                    <div className="policy">
                        {/* Split out Component anchor */}
                        <div>Privacy Policy</div>
                        <div>Term & Conditions</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer;