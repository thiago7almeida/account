import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../../src/App';

export function renderApp() {
  return render(<App />);
}
