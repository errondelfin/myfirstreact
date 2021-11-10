import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://i.postimg.cc/C5LbXXsb/final-614fdad5f79ba90085f11986-76434-removebg-preview.png'} className="App-logo" alt="logo" />
        <p>
          Pogi ako. - erron
          <Greet></Greet>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React! 
        </a>
      </header>
    </div>
  );
}

export default App;
