/**
 * @file Pagination.tsx
 * @description Este componente pagina la información obtenida de la API, para facilitar la lectura y segmentar los resultados.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PaginationProps } from '../../utils/interfaces';

const Pagination: React.FC<PaginationProps> = ({
  currentPage, // Página actual
  elementsPerPage, // Elementos por página
  totalCount, // Total de elementos
  onNextPage, // Función para ir a la siguiente página
  onPreviousPage, // Función para ir a la página anterior
}) => {
  const totalPages = Math.ceil(totalCount / elementsPerPage); // Calcula el total de páginas disponibles

  return (
    <View style={styles.pagination}>
      <TouchableOpacity onPress={onPreviousPage} disabled={currentPage === 1}> 
        <Text style={[styles.buttonText, currentPage === 1 && styles.disabledButtonText]}>Anterior</Text>
      </TouchableOpacity>

      <Text style={styles.pageNumber}>{currentPage}</Text>

      <TouchableOpacity onPress={onNextPage} disabled={currentPage >= totalPages}>
        <Text style={[styles.buttonText, currentPage >= totalPages && styles.disabledButtonText]}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    textDecorationLine: 'underline',
  },
  disabledButtonText: {
    color: '#97989d',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  pageNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Pagination;