//Import Component 
import React, { Component } from 'react'
import Dropitem from '../../anchor/dropitem/dropitem'

///Import SCSS Files
import './dropdown.scss'

class dropdown extends Component {
    render() {
        return (
            <div className="navbody">
                <div className="item">
                    Men <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                    <Dropitem />
                </div>
                <div className="item">
                    Ladies 
                    <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                    <Dropitem />
                </div>
                <div className="item">
                    Girls <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                    <Dropitem />
                </div>
                <div className="item">
                    Boys <i id="IconChev" class="fa fa-chevron-down" aria-hidden="true"></i>
                    <Dropitem />
                </div>
            </div>
        )
    }
}
export default dropdown;