// // change code below this line
// import React from 'react'
// import ReactDOM from 'react-dom'


//****** Building from scratch  */

// class MyComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>My First React Component!</h1>
//             </div>
//         );

//     }


// }

  

// ReactDOM.render(
//         <MyComponent />,
//         document.getElementById('challenge-node')

//     )


/// ******** attributes components challegne below

// const List= (props) => {
//     { /* change code below this line */ }
//     return <p>{props.tasks.join(', ')}</p>
//     { /* change code above this line */ }
//   };
  
//   class ToDo extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h1>To Do Lists</h1>
//           <h2>Today</h2>
//           { /* change code below this line */ }
//           <List tasks={["walk dog", "workout"]}/>
//           <h2>Tomorrow</h2>
//           <List tasks={["walk dog", "workout", "shopping"]}/>
//           { /* change code above this line */ }
//         </div>
//       );
//     }
//   };


// ReactDOM.render(
//     <ToDo />,
//     document.getElementById('challenge-node')
// )

 


//***********  shopping cart component


// const ShoppingCart = (props) => {
//     return (
//       <div>
//         <h1>Shopping Cart Component</h1>
//         <p>We bought {props.items} items</p>
//       </div>
//     )
//   };
//   // change code below this line
  
//   ShoppingCart.defaultProps = {
//     items: 0
//   }

// *********** overriding the default props challenge

// const Items = (props) => {
//     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//   }
  
//   Items.defaultProps = {
//     quantity: 0
//   }
  
//   class ShoppingCart extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       { /* change code below this line */ }
//       return <Items quantity={10}/>
//       { /* change code above this line */ }
//     }
//   };

// const Items = (props) => {
//     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//   };
  
//   // change code below this line
//   Items.propTypes = {
//     quantity: PropTypes.number.isRequired
//   }
//   // change code above this line
  
//   Items.defaultProps = {
//     quantity: 0
//   };
  
//   class ShoppingCart extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return <Items />
//     }
//   };

//*************** React: Access Props Using this.props
*/


class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* change code below this line */ }
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
              { /* change code above this line */ }
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* change code below this line */ }
            <ReturnTempPassword tempPassword={"ChangeMe1"}/>
            { /* change code above this line */ }
          </div>
      );
    }
  };


//********** React: Review Using Props with Stateless Functional Components
//Campsite and Camper components
  
  class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  // change code below this line
  
  
  
  const Camper = (props) => {
    return (
      <div> 
        <p>{props.name}
        </p>
      </div>
    ) 
  
  }
  
  Camper.defaultProps = {
    name: 'CamperBot'
  }
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }
  