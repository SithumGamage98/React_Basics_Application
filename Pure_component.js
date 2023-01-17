import React, { PureComponent } from 'react'

export default class Pure_component extends PureComponent {
  render() {
    console.log('Pure component')
    return (
      <div>Pure_component : {this.props.name}</div>
    )
  }
}
