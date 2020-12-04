import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ConsultarScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => navigation.navigate('Consoantes')}>Consoantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => navigation.navigate('Vogais')}>Vogais</Text>
            </TouchableOpacity>
        </View>
    );
}