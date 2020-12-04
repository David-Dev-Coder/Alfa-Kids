import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import * as Animatable from 'react-native-animatable';

var numberSquare = 0;

const Appax = ({ pathX, pathY, newBGC }) => {
    const pan = useRef(new Animated.ValueXY()).current;
  
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },
        onPanResponderMove: Animated.event(
          [
            null,
            { dx: pan.x, dy: pan.y }
          ]
        ),
        onPanResponderRelease: (e, gesture) => {
          pan.flattenOffset();
            if (gesture.moveY < pathY && gesture.moveX < pathX) {
                numberSquare += 1;
                console.log("Arrastado " + numberSquare)
            } 
        },
      })
    ).current;
  
    return (
        <Animated.View
            style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
            {...panResponder.panHandlers}
        >
            <View style={[styles.box, {backgroundColor: newBGC}]}>
                <Text>{pathX}</Text>
            </View>
        </Animated.View>
    );
}
  
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
});

export default function AprenderModoScreen({ navigation }) {

    return(
        <View style={styles.container}>
            <Appax pathX={100} pathY={100} newBGC="green"/>
            <Appax pathX={200} pathY={200} newBGC="yellow"/>
            <Appax pathX={300} pathY={300} newBGC="red"/>
        </View>
    )
}