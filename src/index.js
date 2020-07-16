import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SerialMonitor } from './SerialMonitor';

if (!('serial' in navigator)) {
  ReactDOM.render(
    <React.StrictMode>
      <div id="error">
        <div>Web Serial is not supported by your browser.</div>
        <div>Make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags</div>
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
else {
  const serial = navigator.serial;
  const serialMonitor = new SerialMonitor(serial);

  ReactDOM.render(
    <React.StrictMode>
      <App serialMonitor={serialMonitor}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}