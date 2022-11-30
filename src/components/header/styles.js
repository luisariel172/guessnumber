import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const { height, width } = Dimensions.get ('window');

export const styles = StyleSheet.create ({
    container :{
        backgroundColor: colors.primary,
        // con Dimensions para q ocupe el 12% de la pantalla
        height: height * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },

    title: {
        fontSize: 22,
        color: colors.white,
        fontFamily: 'Lato-Regular',
    }
}) 