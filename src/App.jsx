import { useState } from 'react';

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#252525');

  function handleCreateRandomHexColor() {}

  function handleCreateRandomRgbColor() {}

  return (
    <div
      className='app'
      style={{
        background: color,
      }}
    >
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
