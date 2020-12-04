import React from 'react';
import {StyleSheet ,Text } from 'react-native';

export default class App1 extends Component{

    clicou = () => {
    Alert.alert("AlfaKids", "Clicou no Botão!!!");
  }
    render(){
      return(
        <View style={estilos.conteiner}>
  
        <TouchableOpacity style={estilos.botao}
        onPress={() => {this.clicou()}}
        
        >
  
          <Text style={estilos.botaoText}>Olá</Text>
  
         </TouchableOpacity>
  
  
         
  
      </View>
      );
    }
  }
  
  const estilos = StyleSheet.create({
    conteiner: {
        flex:1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
      
      fontSize:16,
      fontWeight: 'bold',
      color: 'green'
  
    },
  
      botao: {
       width: 300,
       height: 42,
       backgroundColor: 'white',
       marginTop: 10,
       borderRadius: 4,
       alignItems: 'center',
       justifyContent: 'center'
    }
    
  
  });