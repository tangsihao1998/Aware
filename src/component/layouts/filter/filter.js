//import component
import React, { Component } from 'react'
// import { Accordion, Icon } from 'semantic-ui-react'

//import SCSS
import './filter.scss'

class filter extends Component {
  state = { activeFilter: null }

  FilterhandleClick = (name) => {
    console.log(this.state.active);
    this.setState({ activeFilter: name })
  }
  
  render() {    
    const {activeFilter} = this.state;
    return (
      <div>
        <div className="filter-container">
            <div className={`filter-option ${activeFilter === 'size' && 'active'}`}  onClick={(e) => this.FilterhandleClick('size')}>
                <div className="Click">
                  <div>Size</div>
                  <div className="ClickIcon"><i class="fa fa-chevron-down"></i></div>
                </div>
                {/* Component Size */}
                <div className="inside">
                  ABCSJSJSJSJSJS
                </div>
            </div>
            <div className={`filter-option ${activeFilter === 'color' && 'active'}`}  onClick={(e)=>this.FilterhandleClick('color')}>
                <div className="Click">
                  <div>Color</div>
                  <div className="ClickIcon"><i class="fa fa-chevron-down"></i></div>
                </div>
                {/* Component Color */}
                <div className="inside">
                  ABCSJSJSJSJSJS
                </div>
            </div>
            <div className={`filter-option ${activeFilter === 'brand' && 'active'}`}  onClick={(e)=>this.FilterhandleClick('brand')}>
                <div className="Click">
                  <div>Brand</div>
                  <div className="ClickIcon"><i class="fa fa-chevron-down"></i></div>
                </div>
                {/* Component Brand */}
                <div className="inside">
                  ABCSJSJSJSJSJS
                </div>
            </div>
            <div className={`filter-option ${activeFilter === 'price' && 'active'}`}  onClick={(e)=>this.FilterhandleClick('price')}>
                <div className="Click">
                  <div>Price</div>
                  <div className="ClickIcon"><i class="fa fa-chevron-down"></i></div>
                </div>
                {/* Component Price */}
                <div className="inside">
                  ABCSJSJSJSJSJS
                </div>
            </div>
            <div className={`filter-option ${activeFilter === 'avail' && 'active'}`}  onClick={(e)=>this.FilterhandleClick('avail')}>
                <div className="Click">
                  <div>Available</div>
                  <div className="ClickIcon"><i class="fa fa-chevron-down"></i></div>
                </div>
                {/* Component Available */}
                <div className="inside">
                  ABCSJSJSJSJSJS
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default filter;