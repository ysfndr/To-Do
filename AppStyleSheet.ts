import { StyleSheet } from 'react-native';

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

export default styles;