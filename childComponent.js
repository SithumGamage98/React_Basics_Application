import React from 'react'


 function App2(props) {
  return (
    <div>
      
      <button onClick={()=>props.message('child')}>My Button</button>
    </div>
  )
}

export default App2;
