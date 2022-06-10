import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VictoryPie, } from "victory-native";

const data = [
  { x: "😀" , y: 10 },
  { x: "🤣", y: 6 },
  { x: "🤩", y: 5 },
  { x: "😘", y: 10 }
];

export default function App() {
  return (
    <View style={styles.container}>
    <VictoryPie data={data} height={300} width={300} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
