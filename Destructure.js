import React from "react";


const Dest = ()=>{

    function clickMe(){

        console.log('Clicked');


    }
 
    return(
       <div>
 
      <button onClick={clickMe}>Function Click</button>
       </div>


    )


}

export default Dest;