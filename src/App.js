import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello'
import Employee from './components/Employee';

//csb
//jsx - js xml
//react not a framework!
//angular. vue
//function
//test
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Employee/>
        <Greet name={Hello()} heroName = "spiderman">
          <Message/>
        </Greet>
        <Greet name="Tony" heroName = "iron man">
          <Button/>
        </Greet>
        <Greet name="Thor" heroName = "Thor"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
