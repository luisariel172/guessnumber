import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card, NumberContainer } from "../../components";
import colors from "../../utils/colors";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
    //redondeo de min y max
    min = Math.ceil(min);
    max = Math.floor(max);
    //generacion del numero aleatorio, que nunca superara el nro minimo maximo
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const Game = ({selectedNumber}) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));

    return(
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Numero del Contrincante</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.containerButton}>
                    <Button title="Menor" onPress={() => null} color={colors.primary} />
                    <Button title="Mayor" onPress={() => null} color={colors.green} />
                </View>
            </Card>
        </View>
    )
}

export default Game;
