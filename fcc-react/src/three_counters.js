import React from "react"



  class ThreeCounters extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // change code below this line
      //bindings
      this.increment5 = this.increment5.bind(this)
      this.increment25 = this.increment25.bind(this)
      this.increment50 = this.increment50.bind(this)
      this.reset = this.reset.bind(this)
      // change code above this line
    }
    // change code below this line
    //increment
    increment5(){
    this.setState({
      count: this.state.count + 5
      })
    }

    increment25(){
        this.setState({
          count: this.state.count + 25
        })
    }
    increment50(){
        this.setState({
          count: this.state.count + 50
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
            <div id="one">
                <button className='inc' onClick={this.increment5}>+5</button>
            </div>  
            <div id="two">
                <button className='inc' onClick={this.increment25}>+25</button>
            </div> 
            <div id="three">
                <button className='inc' onClick={this.increment50}>+50</button>
            </div> 
            <div id="reset">
                <h2>Clicked Buttons = {this.state.count}</h2>
                <button className='reset' onClick={this.reset}>Reset</button>
            </div> 
          
        </div>
      );
    }
  };

export default ThreeCounters;