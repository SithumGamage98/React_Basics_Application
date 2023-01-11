import React, { Component } from 'react';

class App3 extends Component {

  //create a state for give initial counter value

  constructor(props){

    super(props)
    this.state = {

        count:0

    }
  }

  //Set state for increment value

  CountValue(){
   this.setState({

      count : this.state.count+1
  

   })
    
    console.log(this.state.count);
    
  }
  
  
  
  render() {
    return (
      <div>
       
       <button onClick={()=>this.CountValue()}>Count</button>
      

      </div>
    );
  }
}export default App3;

