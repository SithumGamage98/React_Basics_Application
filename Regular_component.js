import React, { Component , PureComponent} from 'react'

export default class Regular_component extends Component {

    
  render() {
    console.log('Regular component')
    return (
      <div>Regular_component : {this.props.name}</div>
    )
  }
}
