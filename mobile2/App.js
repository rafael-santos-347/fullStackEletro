import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pokemons from './src/screens/Pokemons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  options={{ title: 'Full Stack Eletro', headerStyle: {backgroundColor: "#fd4912"}, headerTitleAlign: "center" , headerTitleStyle: {color: "#f2f2f2", fontWeight: '100'}}} component={Login} />
        <Stack.Screen name="Home" options={{ title: 'A loja full stack mudou !', headerStyle: {backgroundColor: "#fd4912"} , headerTitleAlign: "center",
      headerTitleStyle: {color: "#f2f2f2", fontWeight: '100'} }} component={Home} />
        <Stack.Screen name="Pokemons" options={{ title: 'Listando alguns pokemons', headerStyle: {backgroundColor: "#fd4912"} , headerTitleAlign: "center",headerTitleStyle: {color: "#f2f2f2", fontWeight: '100'} }} component={Pokemons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
