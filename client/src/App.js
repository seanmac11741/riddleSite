import './App.css';
import SpeechRec from './SpeechRec';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          What has a head, a tail, is brown, and has no legs?</p>
        <p>{console.log(`React name: ${process.env.REACT_APP_NAME}`)}</p>

        < SpeechRec />
      </header>
    </div>
  );
}

export default App;
