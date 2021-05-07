import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStackScreen from './screens/RootStackScreen';

export default function App() {
  return (
   <NavigationContainer>
     <RootStackScreen/>
   </NavigationContainer>
  );
}