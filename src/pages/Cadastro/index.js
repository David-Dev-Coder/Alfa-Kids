import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function CadastroScreen({ navigation }) {

    const [ name, setUser] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const uri = 'http://localhost/Web/registror/registrar.php';

    const register = async() => {
        try {
            const resp = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email,
                    password
                })
            })

            const json = await resp.json();

            if(json == "OK"){
                alert("Usuário cadastrado com sucesso");

                navigation.navigate('SignIn');
            }else{
                alert(json);
            }
        } catch (e) {
            console.log('erro on register...', e.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Alfa Kids</Text>
                <Text>Aprender Brincando</Text>
            </View>
            <View>
                <View style={[styles.subTitleContainer]}>
                    <Text style={[styles.subTitle]}>Login</Text>
                </View>
                <TextInput style={[styles.txtInput]}
                placeholder={'Insira seu Login'}
                onChangeText={txt1 => setUser(txt1)}/>
                <View style={[styles.subTitleContainer]}>
                    <Text style={[styles.subTitle]}>Email</Text>
                </View>
                <TextInput style={[styles.txtInput]}
                placeholder={'Insira seu Email'}
                onChangeText={txt2 => setEmail(txt2)}/>
                <View style={[styles.subTitleContainer]}>
                    <Text style={[styles.subTitle]}>Senha</Text>
                </View>
                <TextInput style={[styles.txtInput]}
                placeholder={'Insira sua Senha'} 
                secureTextEntry={true}
                onChangeText={txt3 => setPassword(txt3)}/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => register()}>Cadastrar-se</Text>
            </TouchableOpacity>
        </View>
    );
}