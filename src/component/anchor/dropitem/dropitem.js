//Import Component
import React, { Component } from 'react'

//SCSS File
import './dropitem.scss'

export default class dropitem extends Component {
    render() {
        return (
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
        )
    }
}
