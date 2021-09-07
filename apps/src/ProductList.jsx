import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <>
        <h3>
            {this.props.title}-{this.props.currentCategory}
        </h3>
      </>
    )
  }
}
