import React from 'react'

export default function B_self(props) {

  const studetData = props.stDetails.map ((data)=>{
      return(
      <div>
      <h2>The student ID is - {data.id}</h2>
      <h2>The Name is - {data.name}</h2>
      <h2>The faculty is - {data.faculty}</h2>
      <hr></hr>
      </div>
      )
      

  })


    
  return (
    <div>

    
   {studetData}

    </div>
  )
}
