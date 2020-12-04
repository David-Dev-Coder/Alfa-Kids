import React, { useContext } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function Dashboard({ navigation }) {
    
    const { signed, user, signOut } = useContext(AuthContext);

    function handleSignout(){
        signOut();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => navigation.navigate('AprenderLevel')}>Aprender</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => navigation.navigate('Consultar')}>Consultar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => navigation.navigate('Conquistas')}>Conquistas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => navigation.navigate('Ranking')}>Ranking</Text>
            </TouchableOpacity>
            <Text>Olá {user.name}!</Text>
            <Button onPress={handleSignout} title='Sair' />
            {/* <Button onPress={() => navigation.navigate('Splash') } title='Splash' /> */}
        </View>
    );

    // return (
    //     <View style={}>
    //         <Button onPress={() => navigation.navigate('AprenderLevel')} title='AprenderLevel'/>
    //         <Button onPress={() => navigation.navigate('AprenderGameplay')} title='AprenderGameplay'/>
    //         <Button onPress={() => navigation.navigate('Consultar')} title='Consultar'/>
    //         <Button onPress={() => navigation.navigate('Consoantes')} title='Consoantes'/>
    //         <Button onPress={() => navigation.navigate('Vogais')} title='Vogais'/>
    //     </View>
    // );
}
