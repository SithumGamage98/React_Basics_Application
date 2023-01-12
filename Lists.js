//------------MAP FUNCTION 
//Method 01

/*import React, { Component } from 'react'

class Lists extends Component {

   

  render() {
    
    const name = ["Saman", "Kamal" ,"Malith"]
    return (
         <div>
         //Usin Map Function
            {name.map(names=><h1>{names}</h1>)}
        
        </div>
    )
  }
}

export default Lists */






//Method 2 -----------Const variable create and do simple return statement
/*
import React, { Component } from 'react'

class Lists extends Component {

   

  render() {
    
    const name = ["Saman", "Kamal" ,"Malith"]
    const NameList = name.map(names=><h4>{names}</h4>)
    return (
         <div>
         {NameList}
        </div>
    )
  }
}

export default Lists */

//-----EXAMPLE FOR ARRAY OBJECTS-----------------
/*
import React, { Component } from 'react'

class Lists extends Component {

   

  render() {
    
    const person = [

        {
            Name : 'SIthum',
            Skill : 'Java',
            age : 23
        },

        {
            Name : 'Shashini',
            Skill : 'Angular',
            age : 25
        },

        {
            Name : 'Kaveesha',
            Skill : 'React',
            age : 23
        }


    ]

    const PersonList = person.map(persons=><h2>I am {persons.Name} My fav language is {persons.Skill} My age is {persons.age}</h2>)
    return (
         <div>
        {PersonList}
        </div>
    )
  }
}

export default Lists */


//------------------------------EXAMPLE--------------------------------------------------
//Passs Map Array objects values to another component As PROPS----------

import React, { Component } from 'react'
import Person from './Person'

class Lists extends Component {

   

  render() {
    
    const person = [

        {
            Name : 'SIthum',
            Skill : 'Java',
            age : 23
        },

        {
            Name : 'Shashini',
            Skill : 'Angular',
            age : 25
        },

        {
            Name : 'Kaveesha',
            Skill : 'React',
            age : 23
        }


    ]

    const PersonList = person.map(persons=><Person persons ={persons} />)
    return (
         <div>
        {PersonList}
        </div>
    )
  }
}

export default Lists 


