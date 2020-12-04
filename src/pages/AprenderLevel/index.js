import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

import styles from './styles';

export default function AprenderLevelScreen({ navigation }) {

    const [ unlockLevel, setUnlockLevel ] = useState(false);

    const changeSituation = () => setUnlockLevel(!unlockLevel);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
            <TouchableOpacity style={styles.selectLevelContent} onPress={changeSituation}>
                {
                unlockLevel
                ? <Text style={styles.levelTxt}>1</Text>
                : <Image style={styles.tinyLogo} source={require('../../assets/cadeado.png')}/>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectLevelContent} onPress={() => navigation.navigate('AprenderGameplay', { itemId: 1})}>
                <Text style={styles.levelTxt}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectLevelContent} activeOpacity={0.5}>
                <Image style={styles.tinyLogo} source={require('../../assets/cadeado.png')}/>
            </TouchableOpacity>
        </View>
    );
}