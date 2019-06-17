//import Component
import React, { Component } from 'react'

//import SCSS
import './categoryitem.scss'

class categoryitem extends Component {
    render() {
        return (
             <div className="items" >
                <div className="ItemsName">All dresses</div>
                <div className="line"></div>
                <div className="listchoose">
                    <div>Rompers/Jumpsuits</div>
                    <div>Casual dresses</div>
                    <div>Going out dresses</div>
                </div>
            </div>
        )
    }
}

export default categoryitem;