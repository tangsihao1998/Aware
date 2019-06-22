import React, { Component } from 'react'

import './sizepicker.scss'

class sizepicker extends Component {
    changeCSS(e){

    }
    render() {
        return (
            <div className="size-picker">
                <div className="size-box" onClick={this.changeCSS()}><div>S</div></div>
                <div className="size-box" onClick={this.changeCSS()}><div>M</div></div>
                <div className="size-box" onClick={this.changeCSS()}><div>L</div></div>
            </div>
        )
    }
}
export default sizepicker;