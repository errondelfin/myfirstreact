
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Message from './components/Message';
import Hello from './components/Hello';
import Employee from './components/Employee';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://i.postimg.cc/C5LbXXsb/final-614fdad5f79ba90085f11986-76434-removebg-preview.png'} className="App-logo" alt="photo" />
        <p>
          Pogi ako. - erron
        </p>
        <Greet/>
        <Message/>
        <Employee/>
    <p>{Hello()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React! 
        </a>
          <Button/>
      </header>
    </div>
  );
}

export default App;
