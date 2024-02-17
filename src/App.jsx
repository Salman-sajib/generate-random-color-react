import { useState } from 'react';

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#252525');

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
    let poundSign = '#';

    for (let i = 0; i < 6; i++) {
      poundSign += hexValues[Math.floor(Math.random() * hexValues.length)];
    }

    // console.log(poundSign);
    setColor(poundSign);
  }

  function handleCreateRandomRgbColor() {}

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
      <button onClick={() => setColor('hex')}>Generate HEX Color</button>
      <button onClick={() => setColor('rgb')}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}

export default App;
