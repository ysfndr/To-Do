import { Text, View, TextInput, Pressable } from 'react-native';
import styles from '../AppStyleSheet';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
}

const InputBox = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <View style={styles.input}>
            <TextInput
                style={styles.input_box}
                value={todo}
                onChangeText={value => setTodo(value)}
                placeholder="Enter a task" />
            <Pressable style={styles.input_submit} onPress={handleAdd}>
                <Text style={styles.input_submit_text}>ADD</Text>
            </Pressable>
        </View>
    )
}

export default InputBox;