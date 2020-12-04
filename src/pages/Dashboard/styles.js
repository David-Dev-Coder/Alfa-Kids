import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        width: 250,
        height: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        // shadowOffset: {width: 1, height: 1},
        // shadowColor: 'black',
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
    },
    button: {
        flexDirection: 'row',
        width: 250,
        height: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        overflow: "hidden",
    },
    buttonTxt: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
      },
})

export default styles;