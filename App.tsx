/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './src/screens/home/home.screen';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/login/login.screen';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (

<NavigationContainer>
<Stack.Navigator initialRouteName='Home'  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen  name="Home" component={Home}/>
    <Stack.Screen  name="Login" component={Login}/>
  </Stack.Navigator>
</NavigationContainer>
  

  );
}



export default App;
