import React, { Component } from 'react'
import LifeCucle_B from './Lifecycle_B'

export default class Lifecycle_A extends Component {

  //constructor

  constructor(props){

    super(props)

  this.state = {

    name : 'Sithum'

  }
  console.log('Lifecycle AConstructor')

  }

 //static getDerivedStateFromProps

 static getDerivedStateFromProps(props,state){

    console.log('Lifecycle A getDerivedStateFromProps')
    return null;

 }

 //componentDidMount
 componentDidMount(){

    console.log('Lifecycle A ComponentDidMount')

 }


  render() {

    console.log('Lifecycle A render method is in here');
    return (
     <div><h1>Lifecycle_A</h1>
     <LifeCucle_B/></div>
    )
  }
}
