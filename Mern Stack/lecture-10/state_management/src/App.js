import './App.css';
import { Component, useState } from 'react';
import Name from './Components/name/Name'
function App() {

  //component is re-rendered on change in state

  const [count,setCount] = useState(0)
  console.log('this is count State',count);

  const [state,SetState] = useState({
    count: 9,
    name:'ashar',
    email:'abc@xyz.com'
  })

  console.log(state)

  const [ myName , setName] = useState('ashar Mehmood')

  console.log(myName)


  return (
    <div className="App">
     
      this is my app component
      <h2>Count:{count}</h2>

      
      <button onClick={ () =>  setCount(count+1) }>Increase Count</button> <br></br> <br></br>   
      <button onClick = {() => setCount(count -1)} >Decrease Count</button>
      

    
      <h1>STATE:{state.count}</h1>
      <button onClick = {() => SetState({...state,count : state.count+1 })}>Increase State</button>
      <button onClick = {() => SetState({...state,count : state.count-1 })}>Decrease State</button>  <br></br>  <br></br>

      <Name name =  {myName} />

      <button  onClick={()=> setName('amir')}> change my name</button>


    </div>
  );
}

export default App;
