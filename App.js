import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/screens/home";
import Vagas from './src/screens/vagas';


const Drawer = createDrawerNavigator();
export default function App() {
return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
     
    </Drawer.Navigator>
  </NavigationContainer>

  );
}