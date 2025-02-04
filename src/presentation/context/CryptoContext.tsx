/**
 * @file CryptoContext.tsx
 * @description Este archivo define el contexto y proveedor para la gestión de datos de criptomonedas.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React, { createContext, useContext, ReactNode } from 'react';
import { CryptoApi } from '../../data/sources/CryptoApi';
import { CryptoRepository } from '../../domain/repositories/CryptoRepository';  
import { GetCryptoListUseCase } from '../../domain/usecases/GetCryptoListUseCase';
import { GetCryptoDetailUseCase } from '../../domain/usecases/GetCryptoDetailUseCase';
import { CryptoProviderProps } from '../../utils/interfaces';

// Define el contexto para acceder a los casos de uso de criptomonedas.
const CryptoContext = createContext({
  getCryptoListUseCase: new GetCryptoListUseCase(new CryptoRepository(new CryptoApi())),
  getCryptoDetailUseCase: new GetCryptoDetailUseCase(new CryptoRepository(new CryptoApi())),
});

// Proveedor del contexto de criptomonedas. Proporciona los casos de uso a los componentes que lo consumen.
export const CryptoProvider = ({ children }: CryptoProviderProps) => {
  const value = {
    getCryptoListUseCase: new GetCryptoListUseCase(new CryptoRepository(new CryptoApi())),
    getCryptoDetailUseCase: new GetCryptoDetailUseCase(new CryptoRepository(new CryptoApi())),
  };

  return <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>;
};

// Hook para consumir el contexto de criptomonedas.
export const useCryptoContext = () => useContext(CryptoContext);