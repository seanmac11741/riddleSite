import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const SpeechRec = () => {

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const answer = 'penny';

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button className='micButton' onClick={resetTranscript && SpeechRecognition.startListening}>Record</button>
            <button className='micButton' onClick={SpeechRecognition.stopListening}>Stop</button>
            {/* <button onClick={resetTranscript}>Reset</button> */}
            <p>{transcript ? transcript : 'Speak your answer into the microphone'}</p>
            {transcript ?
                <p>The answer: "{transcript}" is: {
                    transcript.toLocaleLowerCase().includes(answer) ? 'Correct!' : 'Wrong...'
                }
                </p>
                : <p>...</p>
            }

        </div>
    )
}

export default SpeechRec