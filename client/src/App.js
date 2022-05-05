import './App.css';
import SpeechRec from './SpeechRec';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          If you know the password then speak, friend, and enter...
        </p>
        <p>{console.log(`React name: ${process.env.REACT_APP_NAME}`)}</p>

        < SpeechRec />
      </header>
    </div>
  );
}

export default App;
