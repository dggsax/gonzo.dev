import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders gonzo.dev', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Gonzo.dev/i);
  expect(linkElement).toBeInTheDocument();
});
