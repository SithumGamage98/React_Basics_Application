import React, { Component } from 'react';

class App5 extends Component {
  
  //create a constructor

  constructor(){
    super()
    //state object
    this.state={

      message : "Welcome to Visit"

    }


  }

  //Change message function
  changeMessage(){

    this.setState({

        message : "Thank for Click Me"

    })

  }
  
  render() {
    return (
      <div>
       

        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Click Me</button>


      </div>
    );
  }
}export default App5;

