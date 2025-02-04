/**
 * @file CryptoDetailScreen.tsx
 * @description Este componente muestra la información detallada de una criptomoneda.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCryptoContext } from '../context/CryptoContext';
import { Crypto } from '../../domain/entities/Crypto';
import { CryptoDetailScreenProps } from '../../utils/interfaces';
import Loading from '../components/Loading';

const CryptoDetailScreen: React.FC<CryptoDetailScreenProps> = ({ route }) => {
  const { getCryptoDetailUseCase } = useCryptoContext(); // Obtiene el caso de uso para obtener los detalles de la criptomoneda.
  const { id } = route.params; // Obtiene el ID de la criptomoneda de las propiedades de navegación.
  const [crypto, setCrypto] = useState<Crypto | null>(null); // Estado para almacenar la criptomoneda.
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para indicar si se está cargando la información.
  const [error, setError] = useState<string | null>(null); // Estado para almacenar un mensaje de error.

  useEffect(() => {
    const fetchCryptoDetail = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const crypto = await getCryptoDetailUseCase.execute(id); // Obtiene los detalles de la criptomoneda.
        setCrypto(crypto);
      } catch {
        setError('Error al cargar los detalles de la criptomoneda.'); // Muestra un mensaje de error si falla la carga.
      } finally {
        setIsLoading(false); // Indica que se ha terminado de cargar la información y cambia el estado del componente de carga para ocultarlo.
      }
    };

    fetchCryptoDetail();
  }, [getCryptoDetailUseCase, id]); // Ejecuta la función de carga al montar el componente y cuando cambia el caso de uso (Contexto) o el ID de la criptomoneda.

  // Muestra un mensaje de error si falla la carga de la información.
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Muestra la información de la criptomoneda si se ha cargado correctamente.
  return (
    <View style={styles.container}>
      {crypto && (
        <>
          <Text style={styles.cryptoName}>{crypto.name} ({crypto.symbol})</Text>
          <View style={styles.card}>
            <Text style={styles.label}>Precio USD:</Text>
            <Text style={styles.value}>${crypto.price_usd.toFixed(2)}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Capitalización de mercado:</Text>
            <Text style={styles.value}>${crypto.market_cap_usd.toFixed(2)}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Volumen (24h):</Text>
            <Text style={styles.value}>${crypto.volume24.toFixed(2)}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Cambio en 24h:</Text>
            <Text style={[styles.value, crypto.percent_change_24h >= 0 ? styles.positive : styles.negative]}>
              {crypto.percent_change_24h.toFixed(2)}%
            </Text>
          </View>
        </>
      )}
      <Loading visible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9eaec',
  },
  cryptoName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#686e72',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  positive: {
    color: '#4CAF50',
  },
  negative: {
    color: '#F44336',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF5252',
    fontSize: 16,
  },
});

export default CryptoDetailScreen;
