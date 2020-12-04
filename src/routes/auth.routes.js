import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import CadastroScreen from '../pages/Cadastro';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}}/>
        <AuthStack.Screen name="Cadastro" component={CadastroScreen}
        options={{ headerTitleAlign: 'center' }} />
    </AuthStack.Navigator>
)

export default AuthRoutes;