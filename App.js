import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Paginas
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Camera from './pages/Camera';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Contatos" component={Contatos}/>
      <Tab.Screen name="Camera" component={Camera}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}