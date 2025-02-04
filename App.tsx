import React from 'react';
import { CryptoProvider } from './src/presentation/context/CryptoContext';
import AppNavigator from './src/presentation/navigation/AppNavigator';

const App = () => {
  return (
    <CryptoProvider>
      <AppNavigator />
    </CryptoProvider>
  );
};

export default App;