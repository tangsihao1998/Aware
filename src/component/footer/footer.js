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
                    <div></div>
                    <div></div>
                </div>
                {/* Privacy & Options */}
                <div className="footer2">
                    <div>asdsadsadsadas</div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default footer;