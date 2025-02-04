/**
 * @file CryptoListScreen.test.tsx
 * @description Pruebas unitarias para el componente CryptoListScreen.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import CryptoListScreen from '../../../src/presentation/screens/CryptoListScreen';
import { CryptoProvider } from '../../../src/presentation/context/CryptoContext';

// Mock del contexto de criptomonedas, simula el proveedor, el hook useCryptoContext y el caso de uso getCryptoListUseCase.
jest.mock('../../../src/presentation/context/CryptoContext', () => ({
  CryptoProvider: ({ children }: any) => <>{children}</>, 
  useCryptoContext: () => ({ 
    getCryptoListUseCase: {
      execute: jest.fn().mockResolvedValue([ // Simula una respuesta exitosa de la API.
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price_usd: 50000,
          percent_change_24h: 2.5,
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price_usd: 3000,
          percent_change_24h: -1.2,
        },
      ]),
    },
  }),
}));

// Prueba que el componente CryptoListScreen muestra el indicador de carga inicialmente.
describe('CryptoListScreen', () => {
it('renders correctly with loading state', () => {
  const { getByTestId } = render(
    <CryptoProvider>
      <CryptoListScreen navigation={{ navigate: jest.fn() }} />
    </CryptoProvider>
  );
  expect(getByTestId('loading-indicator')).toBeTruthy(); // Verifica que exista el indicador de carga.
});

// Prueba que el componente CryptoListScreen renderiza la lista de criptomonedas correctamente después de que se cargan los datos.
it('renders crypto list correctly', async () => {
  const { findAllByText } = render(
    <CryptoProvider>
      <CryptoListScreen navigation={{ navigate: jest.fn() }} />
    </CryptoProvider>
  );

  // Espera a que se carguen los datos y se actualice el componente.
  await waitFor(async () => {
    const bitcoinName = await findAllByText('Bitcoin (BTC)'); // Espera y busca el texto "Bitcoin (BTC)".
    const ethereumName = await findAllByText('Ethereum (ETH)'); // Espera y busca el texto "Ethereum (ETH)".

    expect(bitcoinName).toBeTruthy();
    expect(ethereumName).toBeTruthy();
  });
});
});
