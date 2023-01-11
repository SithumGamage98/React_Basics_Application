
import React, { Component } from 'react'
import App2 from './childComponent';

export class Blindint_event extends Component {

  constructor(props){
    super(props)
    this.state={

      mas : 'Balla'

    }

    this.parentMessage=this.parentMessage(this)

  }

  parentMessage(childName){

    alert(this.state.mas)
    


  }


  render() {
    return (
      <div>

        <App2 message={this.parentMessage}/>

      </div>
    )
  }
}

export default Blindint_event



/*
export class Blindint_event extends Component {

   constructor(){
    super()
    this.state={

        message : "Hello"
       
       
    } 
    //Method no3 -----Binding in the constructur
      this.clickHandler = this.clickHandler.bind(this)
   }
   /*
   clickHandler(){

    this.setState({

      message : "Thank for Click Me"

  }) 
        console.log(this);

    } 

    //Method 04 -------Using arrow function

    clickHandler = () => {

      this.setState({

          message : 'Good Bye'

      })

    }


  render() {
    return (
      <div>
        {this.state.message}
         Method 01----bind with Method
        {/*<button onClick={this.clickHandler.bind(this)}>Bined Button</button>*/

        {/*Method 02-----Using function*/}
        {/*<button onClick={()=>this.clickHandler()}>Bined Button</button>*/}

        {/*Method 03 --- Bonding with the constructor*/}
        {/* <button onClick={this.clickHandler}>Bind with Constructor</button>*/}
        
        {/*Method 04 --- Using arrow function*/}
        {/*<button onClick={this.clickHandler}>Using arrow function</button>*/}
        

      
     {/* </div>
    )
  }
} */}

//export default Blindint_event 

//The simple way is meth no 2
//Most using way is Meth no 3 and 4