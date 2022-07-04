import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export default function App() {

  const [todo, setToddo] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text>This app is created by Metin and Yusuf</Text>
      <Text style={styles.heading}>Hiworld Task Manager</Text>
      <StatusBar style="auto" />
      <InputBox todo = {todo} setTodo = {setToddo}/>
    </View>
)}

const InputBox = ({todo, setTodo}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={todo} 
      onChangeText={ value => setTodo(value) } 
      placeholder="Enter a task"/>
      <Button title="GO"/>
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
    fontSize: 25,
    marginTop: 90,
    color: 'black',
    zIndex: 1,
    textAlign: 'center',
  },
});
