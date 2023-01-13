import React, { Component } from 'react'

export class Form extends Component {

   constructor(){
    super()
    this.state={

        message: '' ,
        comment : '',
        language : 'React'
        
    }

   }

   changeEvent = (event) =>{
        this.setState({

            message: event.target.value

        })
  }

  changeComment=(event)=>{

    this.setState({

        comment : event.target.value

    })

  }

  changeSelect=(event)=>{

    this.setState({

        language : event.target.value

    })

  }

  ButtonSubmit = (event)=>{

    alert(`${this.state.message} ${this.state.comment} ${this.state.language}`)
    event.preventDefault() //By using this after alert the inputed details doesnt remove/refresh

  }


  render() { 
    
    

    return (
      <div>


            <h2>Form</h2>
            <form onSubmit={this.ButtonSubmit}> {/*We use this onSubmit for buttons*/}
                <div>
                    <label>Name</label><input type="text" value={this.state.message} onChange={this.changeEvent}></input>
                </div>
                
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.changeComment}></textarea>
                </div>
                
                <div>
                    <lable>Language</lable>
                    <select value={this.state.language} onChange={this.changeSelect}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Java</option>

                    </select>

                </div>
                <div><button>Submit</button></div> {/*Buttton act reagrding the instructions given by the onSubmit method*/}
                
                </form>
            

      </div>
      

      
    )
  }
}

export default Form