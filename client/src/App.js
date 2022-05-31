import './App.css';
import SpeechRec from './SpeechRec';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          What was once a tree, but never grows, where birds alight and power flows?</p>
        <p>{console.log(`React name: ${process.env.REACT_APP_NAME}`)}</p>

        < SpeechRec />
      </header>
    </div>
  );
}

export default App;
