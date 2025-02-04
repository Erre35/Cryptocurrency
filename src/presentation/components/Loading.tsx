/**
 * @file Loading.tsx
 * @description Este componente muestra una animación de carga en pantalla completa.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from "react";
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Modal } from "react-native";
import { LoadingProps } from "../../utils/interfaces";

const Loading: React.FC<LoadingProps> = ({ visible }) => {
    return (
        <Modal transparent visible={visible}>
            <View style={styles.container} testID="loading-indicator">
                <LottieView // Libreria que permite mostrar animaciones en formato JSON.
                    style={{ height: 200, aspectRatio: 1 }}
                    source={require('../../utils/loading2.json')} //JSON de la animación de carga.
                    autoPlay
                    loop
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default Loading;