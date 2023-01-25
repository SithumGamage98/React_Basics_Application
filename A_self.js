import React, { Component } from 'react'
import B_self from './B_self'

 class A_self extends Component {



  render() {

  const student = [
    {
      id:"1",
      name:"Anujitha",
      faculty : "Computing"

    },

    {
      id:"2",
      name:"Sadaru",
      faculty : "Engineering"

    },

    {
      id:"3",
      name:"Gamitha",
      faculty : "IT"

    }




  ]

  const stData = student.map((data2=>{

     return(
      <div>
        <h2>Name is : {data2.name}</h2>

      </div>

     )


  }))
   

    return (
      <div>

       {/*<B_self stDetails={student}/>*/}

        {stData}
      </div>
        
    )
  }
}export default A_self


