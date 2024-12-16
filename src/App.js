import './App.css';

// function App() {
//   const name = "Vanshaj"
//     return( <div className="App">
//      <h1>{name}</h1>
//      <h1>{name}</h1>
//      <h1>{name}</h1>
//      </div>
//   );
// }


// function App() {
//   const name = <h1>Vanshaj</h1>
//   const age = <h2>21</h2>
//   const email = <h2>Abc@gmail.com</h2>
//   const user = ( 
//   <div>
//   {name}
//   {age}
//   {email}
// </div>
//   );
//from here
// return(
//   <div className="App">
//     <User name="Vanshaj" age={21} email="Abc@gmail.com"/>
//     <User name="John" age={22} email="xyz@gmail.com"/>
//     <User name="Arthur" age={20} email="acxy@gmail.com"/>
//   </div>
// );
// }

//what prop looks like
// const props = {
//   name: "Vanshaj",
//   age: 22,
//   email: "Abc@gmail.com"
// }

//using props to print multiple entries below this
// const User = (props) =>{
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.email}</h2>
//     </div>
//   );
// }

//homework problem
function App(){
  return (
    <div className ="App"> 
      <Job salary={10000} position="Senior SDE" company="Google"/>
      <Job salary={20000} position="Junior SDE" company="Amazon"/>
      <Job salary={30000} position="Project Head" company="Rupay"/>
    </div>
  );
}

const Job = (props) =>{
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}

export default App;