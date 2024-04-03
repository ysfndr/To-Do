import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import styles from './AppStyleSheet';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';
import { Todo } from './types'

export default function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  const handleDelete = (id: number) => {
    if (todos) {
      setTodos(todos.filter((item) => item.id !== id));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Task Manager</Text>
      <StatusBar style="auto" />
      <InputBox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </View>
  )
}


