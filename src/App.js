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


function App() {
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
return(
  <div className="App">
    <User name="Vanshaj" age={21} email="Abc@gmail.com"/>
    <User name="John" age={22} email="xyz@gmail.com"/>
    <User name="Arthur" age={20} email="acxy@gmail.com"/>
  </div>
);
}

//what prop looks like
// const props = {
//   name: "Vanshaj",
//   age: 22,
//   email: "Abc@gmail.com"
// }

const User = (props) =>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
}

export default App;
