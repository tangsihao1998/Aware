import React, { Component } from 'react'

import './colorpicker.scss'

class colorpicker extends Component {
    onChange(e){

    }
    render() {
        return (
            <div className="color-picker">
                <div className="color-box"></div>
                <div className="color-box"></div>
                <div className="color-box"></div>
            </div>
        )
    }
}
export default colorpicker;