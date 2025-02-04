/**
 * @file GetCryptoListUseCase.ts
 * @description Caso de uso para obtener la lista de criptomonedas.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { Crypto } from '../entities/Crypto';
import { CryptoRepository } from '../repositories/CryptoRepository';

// Caso de uso para obtener la lista de criptomonedas.
export class GetCryptoListUseCase {
  private cryptoRepository: CryptoRepository; // Repositorio para acceder a los datos de criptomonedas

  constructor(cryptoRepository: CryptoRepository) {
    this.cryptoRepository = cryptoRepository; // Inicializar el repositorio
  }

  // Ejecutar el caso de uso
  async execute(start: number, limit: number): Promise<Crypto[]> {
    return await this.cryptoRepository.getCryptoList(start, limit); // Obtener la lista de criptomonedas
  }
}