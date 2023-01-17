import React, { Component ,PureComponent} from 'react'
import Regular_component from './Regular_component';
import Pure_component from '../Pure_component';

export default class Parent_componenet extends PureComponent {

    constructor(props) {
        super(props)
      
        this.state = {
           name : 'sithum'
        }
      }
  
      componentDidMount(){
  
       setInterval(() => {
  
          this.setState({
              name:'sithums'
          })
          
       }, 2000);
  
  
      }

  render() {
    return (
      <div><h2>Parent_componenet</h2>
      <Pure_component name={this.state.name}/>
      <Regular_component name={this.state.name}/>
      </div>
    )
  }
}

//--------------NOTES----------------------------------
/* If we want to avoid rerender a component , in that case we can use Pure components.. Pure components
are help to avoid rerednering components 
------
if parent component become a pure component , child components automatically become a pure components

*/