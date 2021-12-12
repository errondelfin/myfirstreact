
import '../App.css';
import Button from './Button';
import Greet from './Greet';
import Message from './Message';
import Hello from './Hello';
import Employee from './Employee';
function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={'https://i.postimg.cc/C5LbXXsb/final-614fdad5f79ba90085f11986-76434-removebg-preview.png'} className="App-logo" alt="photo" />
        <p> erron
        </p>
        <Greet/>
        <Message/>
          Pogi ako. - Erron

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

export default Home;
