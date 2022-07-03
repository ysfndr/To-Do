import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This app is created by Metin and Yusuf</Text>
      <Text style={styles.heading}>Hiworld Task Manager</Text>
      <StatusBar style="auto" />
    </View>
    
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    textTransform: 'uppercase',
    fontSize: 40,
    margin: 30,
    color: 'black',
    zIndex: 1,
    textAlign: 'center',
  },
});
