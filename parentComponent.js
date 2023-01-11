
import React, { Component } from 'react'
import App2 from './childComponent';

 class App3 extends Component {

  constructor(props){

    super(props)
    this.state = {

      parentName : 'Parent'

    }

      this.parentMessage = this.parentMessage.bind(this)
  }

  parentMessage(childName){
      
      alert(this.state.parentName)
      alert(childName)
  }


  render() {

  
    return (
      <div>
        <App2 message={this.parentMessage}/>
      </div>
    )
  }
}
export default App3;

