/**
 * @file SearchBar.tsx
 * @description Este componente contiene una campo de busqueda, para filtrar por nombre una criptomoneda en los resultados obtenidos.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SearchBarProps } from '../../utils/interfaces';

const SearchBar: React.FC<SearchBarProps> = ({ 
  value, // Valor del campo de busqueda
  onChangeText, // Función para cambiar el valor del campo de busqueda
  onClear, // Función para limpiar el campo de busqueda
  placeholder = "Buscar..." // Placeholder del campo de busqueda
}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.clearButton}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  clearButton: {
    fontSize: 18,
    color: '#888',
    paddingHorizontal: 10,
  },
});

export default SearchBar;
