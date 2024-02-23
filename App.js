import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './Components/HelloWorld';
import UserName from './Components/UserName';
import Counter from './Components/Counter';
export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld/>
      <UserName/>
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
