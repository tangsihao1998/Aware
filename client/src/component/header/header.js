//import Component
import React, { Component } from 'react'
import Navbar from '../layouts/navbar/navbar'
//import SCSS file
import './header.scss'
class header extends Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

export default header;