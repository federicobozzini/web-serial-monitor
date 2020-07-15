import React, { useState, useEffect } from 'react';
import './App.css';
import { SerialMonitor } from './SerialMonitor';

interface AppProps {
  readonly serialMonitor: SerialMonitor;
}

function App({ serialMonitor }: AppProps) {
  const [serialOutput, updateSerialOutput] = useState("");

  useEffect(() => {
    serialMonitor.onRead(updateSerialOutput);
  }, [serialMonitor]);

  const connectSerialMonitor = () => {
    serialMonitor.connect();
    serialMonitor.onRead(updateSerialOutput);
  }
  return (
    <div className="App">
      <button id="connect" onClick={() => connectSerialMonitor()}>
        Connect the serial monitor
      </button>
      <div id="serial-output">
        {serialOutput}
      </div>
    </div>
  );
}

export default App;
