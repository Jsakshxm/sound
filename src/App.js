import React, { useRef } from 'react';
import audioFile from '/Users/saksham/Downloads/untitledfolder/my-app/src/AwakendEmsizzleREVISED.mp3'; // Adjust the path to match your project structure

const App = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play()
        .then(() => {
          console.log('Audio is playing');
        })
        .catch(error => {
          console.error('Audio playback failed: ', error);
        });
    }
  };

  return (
    <div>
      <h1>My Website</h1>
      <button onClick={playAudio}>Play Audio</button>
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
};

export default App;
