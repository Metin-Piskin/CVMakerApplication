import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './Pages/Home';
import EditScreen from './Pages/Edit';

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="EditScreen" component={EditScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;