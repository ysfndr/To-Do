import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Pressable } from 'react-native';

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export default function App() {

  const [todo, setToddo] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hiworld Task Manager</Text>
      <StatusBar style="auto" />
      <InputBox todo = {todo} setTodo = {setToddo}/>
    </View>
)}

const InputBox = ({todo, setTodo}: Props) => {
  return (
    <View style={styles.input}>
      <TextInput
      style={styles.input_box}
      value={todo} 
      onChangeText={ value => setTodo(value) } 
      placeholder="Enter a task"/>
      <Pressable style={styles.input_submit }>
        <Text style={styles.input_submit_text}>GO</Text>
      </Pressable>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  heading: {
    textTransform: 'uppercase',
    fontSize: 25,
    marginTop: 61,
    color: 'maroon',
    zIndex: 1,
    textAlign: 'center',
  },

  input: {
    display: 'flex',
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1.2,
    paddingTop: 24,
    paddingBottom: 5,
  },

  input_box: {
    width: 290,
    borderRadius: 50,
    paddingRight: 50,
    paddingVertical: 10,
    fontSize: 25,
    position: 'relative',
  },

  input_submit: {
    position: 'absolute',
    width: 45,
    height: 45,
    margin: 12,
    borderRadius: 100,
    right: 0,
    fontSize: 15,
    backgroundColor: 'maroon',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  input_submit_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});
