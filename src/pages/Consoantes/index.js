import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';

import styles from './styles';

export default function ConsoantesScreen({ navigation }) {

    function speak( som ){
        Speech.speak(som,{
            language: 'pt-BR'
        });
    }
    
    return (
        <ScrollView >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                Consoantes
            </Text>

            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Be' )}> 
                <Text style={styles.buttonTxt}>B</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Ce' )}> 
                <Text style={styles.buttonTxt}>C</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Dê' )}> 
                <Text style={styles.buttonTxt}>D</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button}onPress={()=> speak ( 'Letra eFe' )}> 
                <Text style={styles.buttonTxt}>F</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Ge' )}> 
                <Text style={styles.buttonTxt}>G</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra agá' )}> 
                <Text style={styles.buttonTxt}>H</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Jótá' )}> 
                <Text style={styles.buttonTxt}>J</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Ka' )}> 
                <Text style={styles.buttonTxt}>K</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Éle' )}> 
                <Text style={styles.buttonTxt}>L</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Eme' )}> 
                <Text style={styles.buttonTxt}>M</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Ene' )}> 
                <Text style={styles.buttonTxt}>N</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Pe' )}> 
                <Text style={styles.buttonTxt}>P</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Que' )}> 
                <Text style={styles.buttonTxt}>Q</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Érre' )}> 
                <Text style={styles.buttonTxt}>R</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Ésse' )}> 
                <Text style={styles.buttonTxt}>S</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Tê' )}> 
                <Text style={styles.buttonTxt}>T</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Vê' )}> 
                <Text style={styles.buttonTxt}>V</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Dábliu' )}> 
                <Text style={styles.buttonTxt}>W</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Xiz' )}> 
                <Text style={styles.buttonTxt}>X</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Ipsulom' )}> 
                <Text style={styles.buttonTxt}>Y</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={()=> speak ( 'Letra Zê' )}> 
                <Text style={styles.buttonTxt}>Z</Text>
            </TouchableOpacity>
        
            
            </View>
        </ScrollView>
    );
}