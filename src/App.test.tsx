import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { SerialMonitor } from './SerialMonitor';

const serialMonitor = new SerialMonitor();

test('renders learn react link', () => {
  const { getByText } = render(<App serialMonitor={serialMonitor}/>);
  const buttonlement = getByText(/Connect/i);
  expect(buttonlement).toBeInTheDocument();
});
