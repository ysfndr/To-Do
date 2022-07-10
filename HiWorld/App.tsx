import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Pressable } from 'react-native';

interface Props1{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

interface Props2{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleDelete: (id: number) => void;
}

interface Todo{
  id: number;
  todo: string;
  isDone: boolean;
}

export default function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); 

  const handleAdd = () =>{
    if (todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };
  
  const handleDelete = (id: number) =>{
    if (todos){
      setTodos(todos.filter((item) => item.id !== id));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hiworld Task Manager</Text>
      <StatusBar style="auto" />
      <InputBox todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
      <TodoList todos = {todos} setTodos={setTodos} handleDelete = {handleDelete}/>
    </View>
)}

const InputBox = ({todo, setTodo, handleAdd}: Props1) => {
  return (
    <View style={styles.input}>
      <TextInput
      style={styles.input_box}
      value={todo} 
      onChangeText={ value => setTodo(value) } 
      placeholder="Enter a task"/>
      <Pressable style={styles.input_submit } onPress={handleAdd}>
        <Text style={styles.input_submit_text}>GO</Text>
      </Pressable>
    </View>
)}

const TodoList = ({todos, setTodos, handleDelete}: Props2) => {
  return (
    <View>
      {todos.map((item) => 
       <View style={styles.todos}>
        <Text style={styles.todos_text}>{item.todo}</Text>
      <Pressable style={styles.delete_button} onPress={() => handleDelete(item.id)}>
        <Text style={styles.delete_text}>X</Text>
      </Pressable>
       </View> )}
    </View>

  )
};

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
    backgroundColor: 'green',
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

  todos: {
    display: 'flex',
    justifyContent: 'center',
    width: 300,
    flexWrap: 'wrap',
    alignItems: 'center', 
  },

  todos_text: {
    fontSize: 23,
  },

  delete_button: {
    position: 'absolute',
    width: 25,
    height: 25,
    marginVertical: 2,
    marginRight: 7,
    borderRadius: 100,
    fontSize: 15,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },

  delete_text: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
