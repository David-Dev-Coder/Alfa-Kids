import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import AprenderLevelScreen from '../pages/AprenderLevel';
import AprenderScreen from '../pages/AprenderGameplay';
import AprenderModoScreen from '../pages/AprenderModo';
import ConsultarScreen from '../pages/Consultar';
import ConsoantesScreen from '../pages/Consoantes';
import VogaisScreen from '../pages/Vogais';
import SplashScreen from '../pages/NewSc';

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
    },
};

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator initialRouteName="Dashboard">
        <AppStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, gestureEnabled: true, gestureDirection: "horizontal", transitionSpec: {open: config, close: config, }}}/>
        <AppStack.Screen name="AprenderGameplay" component={AprenderScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="AprenderLevel" component={AprenderLevelScreen} options={{ headerTitleAlign: 'center', title: 'Selecionar Level' }}/>
        <AppStack.Screen name="AprenderModo" component={AprenderModoScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="Consultar" component={ConsultarScreen}/>
        <AppStack.Screen name="Consoantes" component={ConsoantesScreen}/>
        <AppStack.Screen name="Vogais" component={VogaisScreen}/>
        <AppStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, gestureEnabled: false }}/>
    </AppStack.Navigator>
)

export default AppRoutes;