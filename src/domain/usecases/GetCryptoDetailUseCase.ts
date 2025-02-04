/**
 * @file GetCryptoDetailUseCase.ts
 * @description Caso de uso para obtener los detalles de una criptomoneda.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { Crypto } from '../entities/Crypto';
import { CryptoRepository } from '../repositories/CryptoRepository';

// Caso de uso para obtener los detalles de una criptomoneda.
export class GetCryptoDetailUseCase {
  private cryptoRepository: CryptoRepository; // Repositorio para acceder a los datos de criptomonedas

  constructor(cryptoRepository: CryptoRepository) {
    this.cryptoRepository = cryptoRepository; // Inicializar el repositorio
  }

  // Ejecutar el caso de uso
  async execute(id: string): Promise<Crypto | null> {
    return await this.cryptoRepository.getCryptoDetail(id); // Obtener los detalles de la criptomoneda
  }
}