import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { StartGame } from './screens/index';
import colors from './utils/colors';


export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Bienvenidos' />
      <StartGame />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
