import React from "react";
import { View, Text, Image, Card, Button } from "react-native";
import { styles } from "./styles";

const GameOver = ({round, seleectedNumber, onRestart}) => {
    return(
        <View style={styles.container}>
            <Text>Fin del Juego</Text>
        </View>
    )
}

export default GameOver;