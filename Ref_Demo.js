import React, { Component } from 'react'

export default class Ref_Demo extends Component {
    
    constructor(props) {
      super(props)
      //Method 01 ----- Create ref object
        this.inputRef = React.createRef()
      
      //Metod 02 ------ Call back method
      this.cbMethod = null

      this.setCbRef = (element) =>{

        this.cbMethod = element;

      }
      
    }

    //componentDidMount Method

    componentDidMount(){
    
    //Method 01 -----

    {/*this.inputRef.current.focus()*/}
    {/*console.log(this.inputRef)*/}
    
    //Method 2 --- Call back 
    if(this.cbMethod){

      this.cbMethod.focus()

    }

    }

    ClickMe=()=>{

      alert(this.inputRef.current.value)

    }



  render() {

    
    return (

      //Method 01
      <div><lable>Name</lable><input type="text" ref={this.inputRef}></input>
       <button onClick={this.ClickMe}>Click me</button>

      {/*Method 02*/}
      <lable>School</lable><input type="text" ref={this.cbMethod}></input></div>
     
    )
  }
}
