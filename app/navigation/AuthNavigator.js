import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MyTabs from '../screens/MainHome';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import PetCard2 from '../components/PetCard2';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
     <Stack.Screen name="Register" component={RegisterScreen} 
     options={{ headerShown: false }}/>
     <Stack.Screen name='MainHome' component={MyTabs}
      options={{ headerShown: false }}/>
        <Stack.Screen name='PetCard2' component={PetCard2}
      options={{ headerShown: false }}/>
        <Stack.Screen name='CartScreen' component={CartScreen}
      options={{ headerShown: false }}/>
       <Stack.Screen name='ProfileScreen' component={ProfileScreen}
      options={{ headerShown: false }}/>
  </Stack.Navigator>
)
export default AuthNavigator;