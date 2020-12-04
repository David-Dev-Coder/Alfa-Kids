import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function SignIn({ navigation }) {
  
    const { signed, signIn } = useContext(AuthContext);

    function handleSignIn(){
        signIn(name);
    }

    // return (
    //     <View style={styles.container}>
    //         <Button onPress={handleSignIn} title='Sign in' />
    //     </View>
    // );

    const [ name, setUser] = useState('vazio');
    const [ password, setPassword] = useState('vazio');

    const uri = 'http://192.168.1.105/Web/registror/login1.php';

    const login = async() => {
        try {
            const resp = await fetch(uri, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    password 
                })
            })

            const json = await resp.json()

            if(json == "OK"){
                alert("Logado com sucesso");

                handleSignIn();
            }else{
                alert(json);
            }
        } catch (e) {
            console.log('erro on login...', e.message);
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
                onChangeText={txt => setUser(txt)}/>
                <View style={[styles.subTitleContainer]}>
                <Text style={[styles.subTitle]}>Senha</Text>
                </View>
                <TextInput style={[styles.txtInput]}
                placeholder={'Insira sua Senha'} 
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt} onPress={() => login()}>Logar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button1} onPress={() => navigation.navigate('Cadastro')}>Não tenho conta</Text>
            </TouchableOpacity>
        </View>
    );
}
