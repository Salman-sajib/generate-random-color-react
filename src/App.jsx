/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('');

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
    const red = generateRandomNumber(256);
    const green = generateRandomNumber(256);
    const blue = generateRandomNumber(256);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  }

  function handleCreateRandomHslColor() {
    const hue = generateRandomNumber(360);
    const saturation = generateRandomNumber(100);
    const lightness = generateRandomNumber(100);

    setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else if (typeOfColor === 'hsl') handleCreateRandomHslColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className='app'
      style={{
        background: color,
      }}
    >
      <h1 className='title'>
        Click on any of the button&apos;s to select a random color format then
        click on random color button
      </h1>
      <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
      <button onClick={() => setTypeOfColor('hsl')}>Generate HSL Color</button>
      <button
        onClick={() => {
          if (typeOfColor === 'hex') handleCreateRandomHexColor();
          else if (typeOfColor === 'hsl') handleCreateRandomHslColor();
          else handleCreateRandomRgbColor();
        }}
      >
        Generate Random Color
      </button>
      <div className='color-name'>
        <h3>
          {' '}
          {typeOfColor === 'rgb'
            ? 'RGB Color'
            : typeOfColor === 'hsl'
            ? 'HSL Color'
            : 'HEX Color'}{' '}
        </h3>
        <h1> {color} </h1>
      </div>
    </div>
  );
}

export default App;
