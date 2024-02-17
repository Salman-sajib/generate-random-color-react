import { useState } from 'react';

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#252525');

  return (
    <div
      className='app'
      style={{
        background: color,
      }}
    >
      <button>Generate HEX Color</button>
      <button>Generate RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
}

export default App;
