/**
 * @file App.test.tsx
 * @description Pruebas unitarias para el componente App.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';
import { CryptoProvider } from '../src/presentation/context/CryptoContext';
import 'react-native-gesture-handler/jestSetup';

// Mock para react-native-gesture-handler, necesario porque este paquete tiene dependencias nativas que no se pueden ejecutar en un entorno de pruebas de Jest.
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native').View;
  return {
    GestureDetector: View,
    PanGestureHandler: View,
  };
});

// Prueba que el componente App se renderiza correctamente.
describe('App Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <CryptoProvider>
        <App />
      </CryptoProvider>
    );
    expect(getByTestId('app-container')).toBeTruthy(); // Asegura que el elemento con testID="app-container" existe.
  });
});
