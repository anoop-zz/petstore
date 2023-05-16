import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import Screen from './app/components/Screen';

import PetsFeedScreen from "./app/screens/PetsFeedScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import AuthNavigator from './app/navigation/AuthNavigator' ;

import PetCard from "./app/components/PetCard";
import ProfileCard from "./app/components/ProfileCard";
import CartScreen from "./app/screens/CartScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileItem from "./app/components/ProfileItem";
import RegisterScreen from "./app/screens/RegisterScreen";
import Tests from "./app/components/Tests";
import NativeBaseTest from "./app/components/NativeBaseTest";
import PetCard2 from "./app/components/PetCard2";
import CartCard from "./app/components/CartCard";


export default function App() {
  return (
<NavigationContainer>
<Screen>
  <AuthNavigator />
</Screen>
</NavigationContainer>
);
}


