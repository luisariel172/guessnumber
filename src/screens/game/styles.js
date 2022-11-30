import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get ('window')
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    content: {
        width: '80%',
        //23% de alto de pantalla 
        height: height * 0.23,
        // usando operador ternario
        //height: height > 300 ? 200 : 100,
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 16,
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})