
import React, { PureComponent } from 'react'


export class App2 extends PureComponent {

  ClassClick(){

    console.log('Class Click Done');

}

  render() {

    return (
      <div>

        <button onClick={this.ClassClick}>Class Event</button>

      </div>
    )
  }
}

export default App2;