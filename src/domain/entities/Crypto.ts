/**
 * @file Crypto.ts
 * @description Definición de la entidad Crypto
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

export class Crypto {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: number;
  percent_change_24h: number;
  percent_change_1h: number;
  percent_change_7d: number;
  price_btc: number;
  market_cap_usd: number;
  volume24: number;
  volume24a: number;
  csupply: number;
  tsupply: number | null;
  msupply: number | null;

  constructor(
    id: string,
    symbol: string,
    name: string,
    nameid: string,
    rank: number,
    price_usd: number,
    percent_change_24h: number,
    percent_change_1h: number,
    percent_change_7d: number,
    price_btc: number,
    market_cap_usd: number,
    volume24: number,
    volume24a: number,
    csupply: number,
    tsupply: number | null,
    msupply: number | null,
  ) {
    this.id = id;
    this.symbol = symbol;
    this.name = name;
    this.nameid = nameid;
    this.rank = rank;
    this.price_usd = price_usd;
    this.percent_change_24h = percent_change_24h;
    this.percent_change_1h = percent_change_1h;
    this.percent_change_7d = percent_change_7d;
    this.price_btc = price_btc;
    this.market_cap_usd = market_cap_usd;
    this.volume24 = volume24;
    this.volume24a = volume24a;
    this.csupply = csupply;
    this.tsupply = tsupply;
    this.msupply = msupply;
  }
}