import React from "react"

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // change code below this line
      this.handleChange = this.handleChange.bind(this)
      // change code above this line
    }
    // change code below this line
    handleChange(event) {
      this.setState({
        input: event.target.value
      })
    }
    // change code above this line
    render() {
      return (
        <div>
          <h1>React: Create a Controlled Input</h1>  
          { /* change code below this line */}
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          { /* change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  export default ControlledInput;