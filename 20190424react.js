// // change code below this line
// //import ReactDOM from "react-dom"

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

