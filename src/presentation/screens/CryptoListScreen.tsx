/**
 * @file CryptoListScreen.tsx
 * @description Este componente muestra la lista de criptomonedas.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CryptoListScreenProps } from '../../utils/interfaces';
import Loading from '../components/Loading';
import { useCryptoContext } from '../context/CryptoContext';
import { Crypto } from '../../domain/entities/Crypto';
import { COINS_PER_PAGE, TOTAL_COUNT } from '../../utils/constants';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const CryptoListScreen: React.FC<CryptoListScreenProps> = ({ navigation }) => {
  const { getCryptoListUseCase } = useCryptoContext(); // Obtiene el caso de uso para obtener la lista de criptomonedas.
  const [cryptoList, setCryptoList] = useState<Crypto[] | []>([]); // Estado para almacenar la lista de criptomonedas obtenidas.
  const [currentPage, setCurrentPage] = useState<number>(1); // Estado para almacenar la página actual.
  const [searchText, setSearchText] = useState<string>(''); // Estado para almacenar el texto de búsqueda.
  const [filteredCryptoList, setFilteredCryptoList] = useState<Crypto[]>([]); // Estado para almacenar la lista de criptomonedas filtradas.
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para indicar si se está cargando la información.
  const [error, setError] = useState<string | null>(null); // Estado para almacenar un mensaje de error.

  useEffect(() => {
    fetchCryptoList(0, COINS_PER_PAGE);
  }, [getCryptoListUseCase]); // Ejecuta la función de carga al montar el componente y cuando cambia el caso de uso (Contexto).

  // Función para obtener la lista de criptomonedas.
  const fetchCryptoList = async (start: number, limit: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const cryptoList = await getCryptoListUseCase.execute(start, limit); // Obtiene la lista de criptomonedas.
      setCryptoList(cryptoList);
    } catch {
      setError('Error al cargar la información de las criptomonedas.'); // Muestra un mensaje de error si falla la carga.
    } finally {
      setIsLoading(false); // Indica que se ha terminado de cargar la información y cambia el estado del componente de carga para ocultarlo.
    }
  };

  // Función para obtener la siguiente página de la lista de criptomonedas.
  const nextPage = () => {
    const totalPages = Math.ceil(TOTAL_COUNT / COINS_PER_PAGE);
    if (currentPage < totalPages) {
      clearFilter(); // Limpia el filtro de búsqueda.
      setCurrentPage(currentPage + 1); // Actualiza la página actual.
      fetchCryptoList(currentPage * COINS_PER_PAGE, COINS_PER_PAGE); // Obtiene la siguiente página de la lista, con base en la página actual y la cantidad de elementos por página, parametros start y limit enviados al cosumo de la API.
    }
  };
  
  // Función para obtener la página anterior de la lista de criptomonedas.
  const previousPage = () => {
    if (currentPage > 1) {
      clearFilter(); // Limpia el filtro de búsqueda.
      setCurrentPage(currentPage - 1); // Actualiza la página actual.
      fetchCryptoList((currentPage - 2) * COINS_PER_PAGE, COINS_PER_PAGE); // Obtiene la página anterior de la lista, con base en la página actual y la cantidad de elementos por página, parametros start y limit enviados al cosumo de la API.
    }
  };

  const filterCryptoList = (text: string) => {
    setSearchText(text); // Actualiza el texto de búsqueda.
    const filteredList = cryptoList.filter((crypto) => // Filtra la lista de criptomonedas.
      crypto.name.toLowerCase().includes(text.toLowerCase()) // Compara el nombre de la criptomoneda en minúsculas con el texto de búsqueda en minúsculas.
    );

    setFilteredCryptoList(filteredList); // Actualiza la lista de criptomonedas filtradas.
  };

  const clearFilter = () => {
    setSearchText(''); // Limpia el texto de búsqueda.
    setFilteredCryptoList([]); // Limpia la lista de criptomonedas filtradas.
  }

  // Muestra un mensaje de error si falla la carga de la información.
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Renderiza cada elemento de la lista de criptomonedas, para el Flatlist.
  const renderItem = ({ item }: { item: Crypto }) => {
    const isPositive = item.percent_change_24h > 0;

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('CryptoDetail', { id: item.id })}
      >
        <View style={styles.row}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name} ({item.symbol})</Text>
            <Text style={styles.price}>USD: ${item.price_usd.toFixed(2)}</Text>
          </View>
          <Text style={[styles.change, isPositive ? styles.positive : styles.negative]}>
            {isPositive ? `+${item.percent_change_24h.toFixed(2)}%` : `${item.percent_change_24h.toFixed(2)}%`}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Renderiza la vista incluyendo los componentes de la barra de búsqueda, la lista de criptomonedas, la paginación y el componente de carga.
  return (
    <View style={styles.container} testID="app-container">
      <SearchBar
        value={searchText}
        onChangeText={(text) => filterCryptoList(text)}
        onClear={clearFilter}
        placeholder="Buscar criptomoneda..."
      />
      <FlatList
        data={searchText ? filteredCryptoList : cryptoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {!!cryptoList?.length && (
        <Pagination
          currentPage={currentPage}
          elementsPerPage={COINS_PER_PAGE}
          totalCount={TOTAL_COUNT}
          onNextPage={nextPage}
          onPreviousPage={previousPage}
        />
      )}
      <Loading visible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eaec',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 13,
    marginVertical: 4,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 16,
    color: '#686e72',
  },
  change: {
    fontSize: 16,
    fontWeight: 'bold',
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 25,
  },
  buttonText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  disabledButtonText: {
    color: '#97989d',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  pageNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CryptoListScreen;