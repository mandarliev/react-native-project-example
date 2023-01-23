import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Welcome to Little Lemon App</Text>
      <LittleLemonHeader/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
