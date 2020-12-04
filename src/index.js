import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth';
import { DgProvider } from './contexts/dg';
import Routes from './routes';

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
               <DgProvider>
                  <Routes />
               </DgProvider>
            </AuthProvider>
        </NavigationContainer>
    );
}