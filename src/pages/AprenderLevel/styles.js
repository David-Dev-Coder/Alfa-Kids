import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    selectLevelContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "24%",
        height: "16%",
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        elevation: 2,
    },
    tinyLogo: {
        width: 60,
        height: 80,
        resizeMode: 'stretch',
    },
    levelTxt: {
        color: '#f0f0f0',
        fontSize: 72,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: {
          width: 1.5,
          height: 1.5,
        },
        textShadowRadius: 6,
        elevation: 2,
    },
    image: {
        resizeMode: "cover",
    },
})

export default styles;