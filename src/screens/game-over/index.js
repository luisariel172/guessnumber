import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import colors from "../../utils/colors";

const GameOver = ({round, selectedNumber, onRestart}) => {
    return(
        <View style={styles.container}>
            <Card style={styles.content}>
                <Image 
                    source={{ uri: 'https://play-lh.googleusercontent.com/shAAX3m_CJQyahe1eIochbdEqH7FDiLEQ9i5WdI8DwNj2N9auke35k8CRmyL0mh7ULs' }}
                    style={styles.image} />
                <Text style={styles.textContent}> Rounds: {round} </Text>
                <Text style={styles.textContent}> Numero Seleccionado: {selectedNumber}</Text>
                <Button 
                    title="Jugar de Nuevo"
                    onPress={onRestart}
                    color= {colors.primary}
                />
            </Card>
        </View>
    )
}

export default GameOver;