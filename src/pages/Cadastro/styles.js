import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 20,
        borderBottomWidth: 2,
        borderColor: '#000',
    },
    subTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize:55,
    },
    subTitle: {
        paddingHorizontal: 2,
        paddingVertical: 8,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:2, 
    },
    txtInput: {
        borderBottomWidth: 1,
        borderColor: '#20232a',
        height: 40,
        width: 280,
        padding: 10,
        fontSize: 16,
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
        padding: 10,
        marginBottom: 10,
    },
    button1: {
        color: '#2f95dc',
        textAlign: 'center',
    },
    buttonTxt: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
    },
})

export default styles;