import React, { Component, Fragment } from 'react'

export default class LifeCucle_B extends Component {

  //constructor

  constructor(props){

    super(props)

  this.state = {

    name : 'Sithum'

  }
  console.log('Lifecycle B Constructor')

  }

 //static getDerivedStateFromProps

 static getDerivedStateFromProps(props,state){

    console.log('Lifecycle B getDerivedStateFromProps')
    return null;

 }

 //componentDidMount
 componentDidMount(){

    console.log('Lifecycle B ComponentDidMount')

 }


  render() { 
    
    
    console.log('Lifecycle A render method is in here');

    return (
      <React.Fragment>

         <div>Lifecycle B</div>
      </React.Fragment>
    )
  }
}

//---------------Notes--------EXECUTION ORDER----------------------------------------------------------
/*If Only have parent component(Lifecycle A)

constructor-->getDerivedStateFromProps()-->render()-->componentDidMount() */

/* If have a child component also (parent-Lifecycle A , child - Lifecycle B)

1.Lifecycle A constructor--> 2.Lifecycle A getDerivedStateFromProps() --> 3.Lifecycle A render() --> 4.Lifecycle B constructor --> 5.Lifecycle B getDerivedStateFromProps() --> 
6.Lifecycle B render() --> 7.Lifecycle B componentDidMount -->8.Lifecycle A compoonentDidiMount() */
