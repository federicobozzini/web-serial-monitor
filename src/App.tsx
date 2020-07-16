import React, { useState, useEffect } from "react";
import "./App.css";
import { SerialMonitor } from "./SerialMonitor";

interface AppProps {
  readonly serialMonitor: SerialMonitor;
}

function App({ serialMonitor }: AppProps) {
  const baudRates = [9600, 14400, 19200, 28800, 38400, 56000, 57600, 115200];
  const [serialOutput, updateSerialOutput] = useState({
    history: [],
    active: "",
  });
  const [isConnected, updateIsConnected] = useState(false);
  const [error, updateError] = useState("");

  useEffect(() => {
    serialMonitor.onRead(updateSerialOutput);
    serialMonitor.onConnectionEvent((connected: boolean) => {
      updateIsConnected(connected);
      updateError("");
    });
  }, [serialMonitor]);

  const onClick = async () => {
    try {
      if (isConnected) {
        await serialMonitor.disconnect();
      } else {
        await serialMonitor.connect();
      }
    } catch (e) {
      updateError(`An error happened: "${e}"`);
    }
  };
  return (
    <div id="app">
      <div id="settings">
        <label>
          Baud Rate:
          <select
            disabled={isConnected}
            onChange={(e) => serialMonitor.setBaudRate(+e.target.value)}
            defaultValue={serialMonitor.baudRate}
          >
            {baudRates.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div id="connect">
        <button onClick={() => onClick()}>
          {isConnected ? "Disconnect" : "Connect"}
        </button>
      </div>
      <div id="serial-output">
        {serialOutput.history.length > 0 && (
          <div id="history">
            {serialOutput.history.map((o, i) => (
              <div key={i}>{o}</div>
            ))}
          </div>
        )}
        <div id="active">{serialOutput.active}</div>
        <div id="error">{error}</div>
      </div>
    </div>
  );
}

export default App;
