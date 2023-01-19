import React, { useState} from 'react'

export default function UseState2() {

    //Define UseState for ----STRINGS -------
    const [name,setname] = useState("Sithum");

    //useState for numbers
    const [num , setNum] = useState(0);

    //Use state for store values to a Array
    const [names , setNames] = useState([])



    //function for change Name value
    function ChangeName(){

        console.log("Clicked!")
        return setname("Pathum")
        
    }

    //Function for increment Num value
    function incrementNum(){
        console.log("Clicked +")
        return setNum (num+1);

    }

    //Function for increment Num value
    function DecrementNUm(){
        console.log("Clicked -")
        return setNum (num-1);

    }

    //OnSubmit Method to AddNaMES

    function addNames(e){
        e.preventDefault(); //This for the values is not got refresh
        setNames([...names ,{id:name.length , name}]);
        setname ("");

    }

  return (
    <div>

     <h2>Name is : {name}</h2>   
    <button onClick={ChangeName}>Click Me</button><br></br><br></br>
    <hr></hr>

    {/*Buttons for increment and decrement values */}
    <button onClick={incrementNum}>+</button> Value is : {num}
    <button onClick={DecrementNUm}>-</button>
    <hr></hr>

    {/*Form for get input names*/}
    <form onSubmit={addNames}>
        <input type="text" value={name} onChange ={(e)=>setname(e.target.value)}></input>
        <button >Add Name</button>
    </form>

    <hr></hr>
    <ul>
        {names.map((item)=>(

            <li key = {item.id}>{item.name}</li>

        ))}


    </ul>

    </div>
  )
}
