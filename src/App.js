import React, { useRef, useEffect } from 'react';
import audioFile from '/Users/saksham/Downloads/untitledfolder/my-app/src/AwakendEmsizzleREVISED.mp3'; // Adjust the path to match your project structure

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
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

    // Start playing the audio once the component is mounted
    document.addEventListener('click', playAudio, { once: true });

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div>
      <h1>My Website</h1>
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
};

export default App;
