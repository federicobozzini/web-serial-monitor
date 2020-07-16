import React, { useState, useEffect } from "react";
import "./App.css";
import { SerialMonitor } from "./SerialMonitor";

interface AppProps {
  readonly serialMonitor: SerialMonitor;
}

function App({ serialMonitor }: AppProps) {
  const [serialOutput, updateSerialOutput] = useState({
    history: [],
    active: "",
  });
  const [isConnected, updateIsConnected] = useState(false);
  serialMonitor.onRead(updateSerialOutput);

  useEffect(() => {
    serialMonitor.onRead(updateSerialOutput);
    serialMonitor.onConnectionEvent(updateIsConnected);
  }, [serialMonitor]);

  const onClick = async () => {
    if (isConnected) {
      await serialMonitor.disconnect();
    } else {
      serialMonitor.connect();
    }
  };
  return (
    <div id="app">
      <button id="connect" onClick={() => onClick()}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
      <div id="serial-output">
        {serialOutput.history.length > 0 && (
          <div id="history">
            {serialOutput.history.map((o, i) => (
              <div key={i}>{o}</div>
            ))}
          </div>
        )}
        <div id="active">{serialOutput.active}</div>
      </div>
    </div>
  );
}

export default App;
