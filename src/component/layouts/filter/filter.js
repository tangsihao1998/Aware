import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class filter extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion className="filtercontainer">
        {/* Size Options */}
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Size
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            {/* Design Size Here */}
            hello
          </p>
        </Accordion.Content>

        {/* Color Options */}
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Color
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
           {/* Design Here */}
          </p>
        </Accordion.Content>

        {/* Brand Options */}
        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Brand
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          {/* Design here */}
        </Accordion.Content>
      </Accordion>
    )
  }
}
export default filter;