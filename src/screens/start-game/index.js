import React, {useState} from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card, Input, NumberContainer } from "../../components";
import colors from "../../utils/colors";


const StartGame = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const[selectedNumber, setSelectedNumber] = useState(null); 
    const [confirmed, setConfirmed]= useState(false);

    const onHandleChange = (value) => {
        //valida de que el numero ingresado sea del 0 al 9, de lo contrario devuelve un espacio vacio
        setNumber (value.replace(/[^0-9]/g, ''))
    }

    const onHandleReset = () => {
        setNumber ('');
        setConfirmed (false);
    }

    const onHandleConfirm = () =>{
        const chosenNumber = parseInt(number, 10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Numero Invalido', 'El numero debe estar entre 1 y 99', [{text: 'Ok', style: 'destructive', onPress: onHandleReset}]);
        } else {
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumber('');
        }
    }

    const confirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}> Seleccionaste el número:</Text>
            <NumberContainer number={selectedNumber} />
            <Button
                title = "Comenzar el juego"
                onPress={() => {onStartGame(selectedNumber)}}
                color={colors.green}
            />
        </Card>
    ) : null;

    return (
        //habilito el contenedor para que sea clickeable
        <TouchableWithoutFeedback onPress={() => {
            //para ocultar el teclado cuando se clickea afuera de la vista
            Keyboard.dismiss();
        }}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.container}>
                    <Text style={styles.title}>Comencemos!</Text>
                    <Card style= {styles.inputContainer}>
                        <Text style={styles.label} >Selecciona un número</Text>
                        <Input 
                            style={styles.input}
                            placeholder="0"
                            maxLength={2}
                            keyboardType="number-pad"
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={onHandleChange}
                            value={number}
                    />
                    <View style={styles.buttonContainer}>
                
                            <Button 
                                title="Reiniciar"
                                onPress={onHandleReset}
                                color= {colors.primary}
                            />
                            <Button 
                                title="Confirmar"
                                onPress={onHandleConfirm}
                                color= {colors.green}
                            />
                        </View>
                    </Card>
                    {confirmedOutput()}
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
