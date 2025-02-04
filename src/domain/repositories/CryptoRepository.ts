/**
 * @file CryptoRepository.ts
 * @description Repositorio para acceder a los datos de criptomonedas.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { Crypto } from '../../domain/entities/Crypto';
import { CryptoApi } from '../../data/sources/CryptoApi';

 
//Esta clase define el repositorio para acceder a los datos de criptomonedas. 
export class CryptoRepository {
  private cryptoApi: CryptoApi; // Fuente de datos para obtener criptomonedas

  constructor(cryptoApi: CryptoApi) {
    this.cryptoApi = cryptoApi; // Inicializar la fuente de datos
  }

  async getCryptoList(start: number, limit: number): Promise<Crypto[]> {
    const data = await this.cryptoApi.getCryptoList(start, limit); // Obtener datos de la API

    // Mapear los datos a objetos de tipo Crypto
    return data.map((item: any) => new Crypto( 
      item.id,
      item.symbol,
      item.name,
      item.nameid,
      Number(item.rank),
      Number(item.price_usd),
      Number(item.percent_change_24h),
      Number(item.percent_change_1h),
      Number(item.percent_change_7d),
      Number(item.price_btc),
      Number(item.market_cap_usd),
      Number(item.volume24),
      Number(item.volume24a),
      Number(item.csupply),
      item.tsupply ? Number(item.tsupply) : null,
      item.msupply ? Number(item.msupply) : null,
    ));
  }

  async getCryptoDetail(id: string): Promise<Crypto | null> {
    const data = await this.cryptoApi.getCryptoDetail(id); // Obtener datos de la API
    if (data) {
      // Mapear los datos a un objeto de tipo Crypto
      return new Crypto(
        data.id,
        data.symbol,
        data.name,
        data.nameid,
        Number(data.rank),
        Number(data.price_usd),
        Number(data.percent_change_24h),
        Number(data.percent_change_1h),
        Number(data.percent_change_7d),
        Number(data.price_btc),
        Number(data.market_cap_usd),
        Number(data.volume24),
        Number(data.volume24a),
        Number(data.csupply),
        data.tsupply ? Number(data.tsupply) : null,
        data.msupply ? Number(data.msupply) : null,
      );
    }
    return null;
  }
}