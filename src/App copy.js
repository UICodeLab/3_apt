import React, { useState } from 'react';
import './App.css';
import rabbit1_face from './rabbit1_face.png';
import rabbit2_face from './rabbit2_face.png';
import rabbit1_ear from './rabbit1_ear.png';
import rabbit2_ear from './rabbit2_ear.png';
import rabbit1_eyes from './rabbit1_eyes.png';
import rabbit2_eyes from './rabbit2_eyes.png';
import rabbit1_background from './rabbit1_background.png';
import rabbit2_background from './rabbit2_background.png';
import sunglass from './sunglass.png';

function App() {
  const rows = 3;
  const cols = 9;
  const images = Array.from({ length: rows * cols });

  const [rotation, setRotation] = useState(0);
  const [eyeMovement, setEyeMovement] = useState({ x: 0, y: 0 });
  const [faceMovement, setFaceMovement] = useState({ x: 0, y: 0 });
  const [sunglassMovement, setSunglassMovement] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = ((mouseX - centerX) / centerX) * 15;
    setRotation(angle);

    const normalizedX = (mouseX - centerX) / centerX;
    const normalizedY = (mouseY - centerY) / centerY;

    const eyeScaleFactor = 5;
    const faceScaleFactor = 2;
    const sunglassScaleFactor = 3.5;

    setEyeMovement({
      x: normalizedX * eyeScaleFactor,
      y: normalizedY * eyeScaleFactor,
    });
    setFaceMovement({
      x: normalizedX * faceScaleFactor,
      y: normalizedY * faceScaleFactor,
    });
    setSunglassMovement({
      x: normalizedX * sunglassScaleFactor,
      y: normalizedY * sunglassScaleFactor,
    });
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div
        className="background"
        style={{
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease-out',
        }}
      >
        {images.map((_, index) => (
          <img
            key={index}
            src="./lighting.png"
            alt="Tile"
            className="tile"
            style={{ rotate: `${rotation * 1.5}deg` }}
          />
        ))}
      </div>
      <div className="rabbit1">
        <img
          src={rabbit1_background}
          alt="Rabbit 1 Background"
          style={{ width: '22vw', top: '-15vh', left: '-1vw' }}
        />
        <img
          src={rabbit1_ear}
          alt="Rabbit 1 Ear"
          style={{ width: '16vw', top: '-13vh', left: '2vw' }}
        />
        <img
          src={rabbit1_face}
          alt="Rabbit 1 Face"
          style={{
            width: '20vw',
            transform: `translate(${faceMovement.x}px, ${faceMovement.y}px)`,
          }}
        />
        <img
          src={rabbit1_eyes}
          alt="Rabbit 1 Eyes"
          style={{
            width: '16vw',
            top: '12vh',
            left: '2vw',
            transform: `translate(${eyeMovement.x}px, ${eyeMovement.y}px)`,
          }}
        />
      </div>
      <div className="rabbit2">
        <img
          src={rabbit2_background}
          alt="Rabbit 2 Background"
          style={{ width: '22vw', top: '-15vh', left: '-1vw' }}
        />
        <img
          src={rabbit2_ear}
          alt="Rabbit 2 Ear"
          style={{ width: '16vw', top: '-13vh', left: '2vw' }}
        />
        <img
          src={rabbit2_face}
          alt="Rabbit 2 Face"
          style={{
            width: '20vw',
            transform: `translate(${faceMovement.x}px, ${faceMovement.y}px)`,
          }}
        />
        <img
          src={rabbit2_eyes}
          alt="Rabbit 2 Eyes"
          style={{
            width: '16vw',
            top: '12vh',
            left: '2vw',
            transform: `translate(${eyeMovement.x}px, ${eyeMovement.y}px)`,
          }}
        />
        <img
          src={sunglass}
          alt="Rabbit 2 Sunglasses"
          style={{
            width: '18vw',
            top: '14vh',
            left: '1vw',
            transform: `translate(${sunglassMovement.x}px, ${sunglassMovement.y}px)`,
          }}
        />
      </div>
    </div>
  );
}

export default App;