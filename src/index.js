import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Game, StartGame } from './screens/index';
import colors from './utils/colors';


export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame} />
  if(userNumber) {
    content = <Game selectedNumber={userNumber} />
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
});
