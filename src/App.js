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
  const name = <h1>Vanshaj</h1>
  const age = <h2>21</h2>
  const email = <h2>Abc@gmail.com</h2>
  const user = <div>
  {name}
  {age}
  {email}
</div>
    return( <div className="App">
    {user}
    {user}
     </div>
  );
}


export default App;
