import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Card = ({children, style}) => {
    return (
        // En contenedor tendra como estilos, una copia de los estilos del contendor -> ...styles.container y una copia de los demas estilos que le pasamos al componente -> ...style
        <View style={{ ...styles.container, ...style }}>
            {/* Adentro solamente renderizo los hijos */}
            {children}
        </View>
    )
}

export default Card;

