
import './App.css';
import './MyComponent';
import MyComponent from './MyComponent';

function App() {
  return (

    <div className="App">
      <MyComponent text="this is a prop from parent to child" text2="another prop" />
      <MyComponent text="this is a prop from parent to child" text2="another prop" />

    </div>

);


}

export default App;
