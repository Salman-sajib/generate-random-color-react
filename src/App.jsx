/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#252525');

  function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hexValues = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[generateRandomNumber(hexValues.length)];
    }

    // console.log(poundSign);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = generateRandomNumber(256);
    const g = generateRandomNumber(256);
    const b = generateRandomNumber(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor;
    else handleCreateRandomHexColor;
  }, [typeOfColor]);

  return (
    <div
      className='app'
      style={{
        background: color,
      }}
    >
      <h1 className='title'>
        Click on any of the button&apos;s to generate a random color
      </h1>
      <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div className='color-name'>
        <h3> {typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'} </h3>
        <h1> {color} </h1>
      </div>
    </div>
  );
}

export default App;
