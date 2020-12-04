import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
   },
   titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "bold"
   },
   box: {
      height: 50,
      width: 50,
      borderRadius: 25,
      zIndex: 2,
      elevation: 2,
   },
   letter: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      textShadowOffset: {width: 1.5, height: 1},
      textShadowColor: 'grey',
      textShadowRadius: 2,
      elevation: 3,
      padding: 2,
   },
   letterBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: 5,
      position: "absolute",
      bottom: 10,
   },
   letterContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      width: 50,
      height: 50,
      borderRadius: 25,
      // borderColor: '#000',
      // borderWidth: 1,
      margin: 2,
      shadowOffset: {width: 1, height: 1},
      shadowColor: 'black',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 2,
   },
});

export default styles;