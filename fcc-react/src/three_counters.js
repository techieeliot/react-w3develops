import React from "react"



  class ThreeCounters extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // change code below this line
      //bindings
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
      // change code above this line
    }
    // change code below this line
    //increment
    increment(){
    this.setState({
      count: this.state.count + 1
      })
    }
  
  
    //decrement
    // decrement() {
    // this.setState({
    //   count: this.state.count - 1
    // })
    // }
  
    //reset
    reset() {
    this.setState({
      count: 0
    })
    }
  
  
    // change code above this line
    render() {
      return (
        <div>
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
            </div>  
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
            </div> 
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
            </div> 
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

export default ThreeCounters;