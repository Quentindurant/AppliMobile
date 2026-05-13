import { useBatteryLevel, useBatteryState } from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const batteryLevel = useBatteryLevel();
  const batteryState = useBatteryState();
  

  return (
    <View style={styles.container}>
      <Text>Current Battery Level: {(batteryLevel * 100).toFixed(0)}%</Text>
      <Text>Current Battery State: {batteryState}</Text>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffffff",
  },
});
