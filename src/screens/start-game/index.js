import React, {useState} from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "./styles";
import { Card, Input } from "../../components";
import colors from "../../utils/colors";

const StartGame = () => {
    const [number, setNumber] = useState('');

    const onHandleChange = (value) => {
        //valida de que el numero ingresado sea del 0 al 9, de lo contrario devuelve un espacio vacio
        setNumber (value.replace(/[^0-9]/g, ''))
    }
    return (
        //habilito el contenedor para que sea clickeable
        <TouchableWithoutFeedback onPress={() => {
            //para ocultar el teclado cuando se clickea afuera de la vista
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Comencemos!</Text>
                <Card style= {styles.inputContainer}>
                    <Text style={styles.label} >Seleccione un numero</Text>
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
                            title="Reset"
                            onPress={() => null}
                            color= {colors.primary}
                        />
                        <Button 
                            title="Confirmar"
                            onPress={() => null}
                            color= {colors.green}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
