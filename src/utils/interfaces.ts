/**
 * @file interfaces.ts
 * @description Este archivo define las interfaces y tipos utilizados en la aplicación.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define los parámetros de navegación para las diferentes pantallas.
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      CryptoList: undefined;
      CryptoDetail: { id: string };
    }
  }
}

// Props para la pantalla de lista de criptomonedas.
export type CryptoListScreenProps = NativeStackScreenProps<ReactNavigation.RootParamList, 'CryptoList'>;

// Props para la pantalla de detalles de criptomoneda.
export type CryptoDetailScreenProps = NativeStackScreenProps<ReactNavigation.RootParamList, 'CryptoDetail'>;

// Interfaz Props para el proveedor del contexto de criptomonedas.
export interface CryptoProviderProps {
    children: React.ReactNode;
}

// Interfaz de Props para el componente SearchBar.
export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
}

// Interfaz de Props para el componente Loading.
export interface LoadingProps {
  visible: boolean;
}

// Interfaz de Props para el componente Pagination.
export interface PaginationProps {
  currentPage: number;
  elementsPerPage: number;
  totalCount: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}
