import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const SpeechRec = () => {

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const answer = 'powerline';

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button className='micButton' onClick={resetTranscript && SpeechRecognition.startListening}>Start</button>
            {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
            {/* <button onClick={resetTranscript}>Reset</button> */}
            <p>{transcript ? transcript : 'Speak your answer into the microphone'}</p>
            <p>Your answer is: {transcript.toLocaleLowerCase() === answer ? 'Correct!' : 'Wrong...'}</p>

        </div>
    )
}

export default SpeechRec