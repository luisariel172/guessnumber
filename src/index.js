import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Game, StartGame } from './screens/index';
import colors from './utils/colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })
  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame} />
  if(userNumber) {
    content = <Game selectedNumber={userNumber} />
  }

  if (!loaded) {
    return(
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color={colors.primary}/>
    </View>
  )
}

  return (
    <View style={styles.container}>
      <Header title={userNumber ? 'Estamos jugando ...' : 'Bienvenidos'} />
      {content}
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: colors.background,
  }
});
