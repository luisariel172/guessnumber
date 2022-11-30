import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
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

const Game = ({selectedNumber, onGameOver}) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
    const [round, setRound] = useState (0)

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    //generamos un nuevo numero aleatorio, en el que recibimos la direccion en la que vamos a ir
    const onHandleNextGuess = (direction) => {
        if(
            direction === 'lower' && currentGuess < selectedNumber ||
            direction === 'greater' && currentGuess > selectedNumber
        ){
            Alert.alert('No hagas trampa', 'Sabes que esta mal', [{text:'Perdon', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        //generacion del nuevo numero aleatorio
        const nextNumber =  generateRandomNumber (currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRound (currentRound => currentRound + 1);
}

    //para estar evaluando constantemente en que momento voy a finalizar el juego
    useEffect(() => {
        if (currentGuess === selectedNumber){
            onGameOver(round);
        }
    },[currentGuess, selectedNumber, onGameOver]);
    
    return(
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Numero del Contrincante</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.containerButton}>
                    <Button title="Menor" onPress={() => onHandleNextGuess ('lower')} color={colors.primary} />
                    <Button title="Mayor" onPress={() => onHandleNextGuess ('greater')} color={colors.green} />
                </View>
            </Card>
        </View>
    )
}

export default Game;
