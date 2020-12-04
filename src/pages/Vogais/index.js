import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';

import styles from './styles';

export default function VogaisScreen({ navigation }) {

    function speak( som ){
        Speech.speak(som,{
            language: 'pt-BR'
        });
    }
      
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                Vogais
            </Text>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra A' )}> 
                <Text style={styles.buttonTxt}>A</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra É' )}> 
                <Text style={styles.buttonTxt}>E</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra I' )}> 
                <Text style={styles.buttonTxt}>I</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Ó' )}> 
                <Text style={styles.buttonTxt}>O</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra U' )}> 
                <Text style={styles.buttonTxt}>U</Text>
            </TouchableOpacity>
    
        </View>
    );
}