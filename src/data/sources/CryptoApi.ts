/**
 * @file CryptoApi.ts
 * @description Definición de la clase para interactuar con la API de criptomonedas.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import axios from 'axios';
import { API_BASE_URL } from '../../utils/constants';

// Clase para interactuar con la API de criptomonedas.
export class CryptoApi {
  // Obtener lista de criptomonedas desde la API.
  async getCryptoList(start: number, limit: number) {
    try {
      const response = await axios.get(`${API_BASE_URL}/tickers/`, {
        params: {
          start: start, // Parámetro para indicar desde qué criptomoneda se quiere obtener la lista
          limit: limit, // Parámetro para indicar cuántas criptomonedas se quieren obtener
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching crypto list:', error);
      throw error;
    }
  }
  // Obtener detalles de una criptomoneda desde la API.
  async getCryptoDetail(id: string) {
    try {
      const response = await axios.get(`${API_BASE_URL}/ticker/?id=${id}`);
      return response.data[0];
    } catch (error) {
      console.error(`Error fetching crypto detail for ${id}:`, error);
      throw error;
    }
  }
}