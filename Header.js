import logo from './cafejardin.jpg';
import './App.css';

function App() {

  return (
    // binding 
    <div className="App">
      <header className="App-header">
        {logo}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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