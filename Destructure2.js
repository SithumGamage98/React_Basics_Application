
import React, { Component } from 'react'

 class Destructure2 extends Component {


  render() {

    //Destructure all the props values
    const {coun , med} = this.props;
    // const {state1,state2} = this.state;
    return (
      <div>

        Country : {coun} -------------Soasal Media : {med}
        

      </div>
    )
  }
}

export default Destructure2