import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//import Navbar from './components/navbar/Navbar';
import MyComponent from './components/MyComponent'
import Name from './components/Names'
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <MyComponent text='this is a prop of MyComponent' > <p>This is a paragraph !!!</p>
        <Footer/>         
       </MyComponent>

       <Name name='ashar' / >
      

    </div>
  );
}

export default App;
