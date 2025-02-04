/**
 * @file CryptoDetailScreen.test.tsx
 * @description Pruebas unitarias para el componente CryptoDetailScreen.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import CryptoDetailScreen from '../../../src/presentation/screens/CryptoDetailScreen';
import { CryptoProvider } from '../../../src/presentation/context/CryptoContext';

// Mock del contexto de criptomonedas, simula el proveedor, el hook useCryptoContext y el caso de uso getCryptoDetailUseCase.
jest.mock('../../../src/presentation/context/CryptoContext', () => ({
    CryptoProvider: ({ children }: any) => <>{children}</>,
    useCryptoContext: () => ({
      getCryptoDetailUseCase: {
        execute: jest.fn().mockResolvedValue({ // Simula una respuesta exitosa de la API.
          id: '1',
          name: 'Bitcoin',
          symbol: 'BTC',
          price_usd: 50000,
          market_cap_usd: 1000000000,
          volume24: 1000000,
          percent_change_24h: 2.5,
        }),
      },
    }),
  }));

// Prueba que el componente CryptoDetailScreen se renderiza correctamente.
describe('CryptoDetailScreen', () => {
  it('renders correctly with a crypto ID', async () => {
    const route = { params: { id: '1' } }; // Simula el objeto route con el parámetro id.
    const { getByText } = render(
      <CryptoProvider>
        <CryptoDetailScreen route={route} />
      </CryptoProvider>
    );

    // Espera a que se resuelva la promesa del caso de uso (getCryptoDetailUseCase.execute).
    await waitFor(() => {
      expect(getByText(/Bitcoin/i)).toBeTruthy(); // Verifica que el nombre de la criptomoneda se muestra en pantalla.
    });
  });
});