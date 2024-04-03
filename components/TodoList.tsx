import { Text, View, TextInput, Pressable } from 'react-native';
import styles from '../AppStyleSheet';
import { Todo } from '../types'

interface Props {
    todos: Todo[];
    handleDelete: (id: number) => void;
}

const TodoList = ({ todos, handleDelete }: Props) => {
    return (
        <View>
            {todos.map((item) =>
                <View style={styles.todos}>
                    <Text style={styles.todos_text}>{item.todo}</Text>
                    <Pressable style={styles.delete_button} onPress={() => handleDelete(item.id)}>
                        <Text style={styles.delete_text}>X</Text>
                    </Pressable>
                </View>)}
        </View>

    )
}

export default TodoList;