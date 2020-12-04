import React, { useRef, useState, useContext } from 'react';
import { Animated, View, PanResponder, Text, TouchableOpacity } from "react-native";

import DgContext from "../../contexts/dg";

import styles from './styles';

var numberSquare = -1

var makeWord = "";

export const ClickableCircle = ({ text }) => {
   const { palavra, changeNmb } = useContext(DgContext);

   const [ showClickacble, setShowClickable ] = useState(true);

   function HandleAllFunctions() {
      if (text === palavra.substring(numberSquare + 1, numberSquare + 2)) {
         numberSquare += 1;
         changeNmb(numberSquare);
         setShowClickable(false);
         makeWord = makeWord + text;
         console.log(makeWord);
      }else {
         console.log("TA ERRADO MEU PATRA1");
      }
   }

   if (showClickacble) {
      return (
         <TouchableOpacity onPress={HandleAllFunctions}>
            <View style={[styles.letterContent]}>
               <Text style={[styles.letter]}>{text}</Text>
            </View>
         </TouchableOpacity>
      );
   }else{
      return null;
   }
}

const DraggableCircle = ({ minX, minY, maxX, maxY, text }) => {

   const { quantidade, changeNmb } = useContext(DgContext);

   const [ showDraggable, setShowDraggable ] = useState(true);

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
            ],
            {useNativeDriver: false},
         ),
         onPanResponderRelease: (e, gesture) => {
            pan.flattenOffset();
            if (gesture.moveY >= maxY && gesture.moveX >= maxX && gesture.moveY <= minY && gesture.moveX <= minX) {
               numberSquare += 1;
               makeWord = makeWord + text;
               console.log(makeWord);
               changeNmb(numberSquare);
               setShowDraggable(false);
               console.log(gesture);
            }
         },
      })
   ).current;

   if (showDraggable) {
      return (
         <Animated.View
         style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
         {...panResponder.panHandlers}>
            <View style={[styles.letterContent]}>
               <Text style={[styles.letter]}>{text}</Text>
            </View>
         </Animated.View>
      );
   }else{
      return null;
   }
}

export default DraggableCircle;