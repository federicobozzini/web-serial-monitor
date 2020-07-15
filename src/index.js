import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SerialMonitor } from './SerialMonitor';

if (!('serial' in navigator)) {
  ReactDOM.render(
    <React.StrictMode>
      Web Serial APIs are not supported by your browser
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