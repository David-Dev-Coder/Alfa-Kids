import React, { useState, useContext, useRef } from 'react';
import { Text, View, TouchableOpacity, Animated, Alert, TouchableHighlight, Easing, Modal, StatusBar, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import DraggableCircle, { ClickableCircle } from "../../components/draggable/index";
import DgContext from "../../contexts/dg";

var palavra = "ELEFANTE";

const ResultContent = () => {
   const { quantidade } = useContext(DgContext);

   var rows = [];
   for (let i = 0; i < palavra.length; i++) {
      rows.push(<View style={styles.resultContent} key={i}><Text>{quantidade >= i ? palavra.substring(i, i + 1): null}</Text></View>)
   }
   return <View style={styles.letterBox2}>{rows}</View>
}

const CircleContent = ({ objeto }) => {
   var {x, y, width, height} = objeto.nativeEvent.layout;
   var rows = [];

   for (var i = 0; i < palavra.length; i++) {
      rows.push(palavra.substring(i, i + 1));
   }

   rows = rows.sort(() => Math.random() - 0.5);

   return(
      <View style={styles.letterBox}>
         {rows.map((item, index) => {
            return (
               <ClickableCircle text={item} key={index}/>
            );
         })}
      </View>
   );
}

export default function AprenderScreen({ navigation, route }) {
   console.disableYellowBox = true;

   // const { itemId } =  route ? route.params : '';
   const refImage = useRef(null);
   const [ teste, setTeste] = useState('infinite');
   const [ modalVisible, setModalVisible] = useState(false);
   const [ tipControl, setTipControl] = useState(1);
   const [ novoTeste, setNovoTeste ] = useState(0);

   const openModal = () => {
      if (!tipControl <= 0) {
         setModalVisible(true);
         setTeste(1);
         setTipControl(tipControl - 1);
      }
   }

   return (
      <View style={{ flex: 1, alignItems: 'center'}}>
         <StatusBar hidden={true}/>

         <Text style={styles.title}>Palavra</Text>

         <ResultContent/>

         <View style={styles.offcenteredView} onLayout={(event) => {
            // var {x, y, width, height} = event.nativeEvent.layout;
            // console.log(x, y, width, height);
            // console.log(event);
            setNovoTeste(event)
            return;
         }}>
            <ImageBackground source={require('../../assets/elefante.png')} style={{ width: "100%", height: "100%"}} resizeMode="contain"/> 
         </View>

         {/* <View style={{ width: 100, height: 100, position: "absolute", top: 0, left: 0, backgroundColor: 'blue'}}/> */}

         {/* <Image source={require('../../assets/controle.png')} style={{ width: 200, marginTop: 50 }} resizeMode="contain"/> */}

         {/* <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: "white", borderWidth: 1, borderColor: "grey" }}>

         </View> */}

         { novoTeste !== 0 ? <CircleContent objeto={novoTeste}/> : null }
         

         {/* <DraggableCircle/> */}

         <TouchableOpacity onPress={openModal} style={{ position: 'absolute', top: 5, right: 5,}}>
            <Animatable.View animation="pulse" easing="ease-out" iterationCount={teste} style={styles.tipContainer}>
               <Text style={{ fontSize: 30 }}>
                  ?
               </Text>
               <View style={styles.countContainer}>
                  <Text style={styles.countText}>
                     {tipControl}
                  </Text>
               </View>
            </Animatable.View>
         </TouchableOpacity>

         {/* Modal 
         <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
               <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                     <Text style={styles.modalText}>Dica</Text>
                     <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "#b71c1c" }} onPress={() => { setModalVisible(!modalVisible);}}>
                        <Text style={styles.textStyle}>x</Text>
                     </TouchableHighlight>
                  </View>
               </View>
            </Modal>
         </View> */}

      </View>
   );
}