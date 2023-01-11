import React, { Component } from 'react'
 class App5 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        
        isLoggin : false

      }
    }


  render() {

    //Method 01

    /*if(this.state.isLoggin){

            return (
                <div>I logged in to the site</div>

            )
    }else{
        return(

            <div>
                I did't logged to the site
            </div>

        )

    }*/

    //Method 02 to ------------Uing a variable---------ELEMENT VARIABLE
    /*
    let message
    if (this.state.isLoggin){

        message = <div>Sithum You Won It</div>
    }else{

        message = <div>Sithum You Loss It</div>
    }

    return <div>{message}</div>
    */

    //Method 03------------TERNORY OPERATOR
    /*
    return(
    this.state.isLoggin ?             //Operator 1 -> check the condition is true
    <div>Welcome to Sri lanka</div> :  // Operator 2 -> implement only if condition becomes true
    <div>Welcome to India</div>)        //operator 3 -> implement only if the condition becomes false */

    //Method 04 -------SHORT SURCIT OPERATOR
    return(

        this.state.isLoggin && <div>Fuck you Sithum</div>


    )

  }
}

export default App5