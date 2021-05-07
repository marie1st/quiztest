import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SplashScreen2 from './SplashScreen2';
import DataScreen from './DataScreen.js';


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary ,
  },
  headerTintColor: 'white',
};
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator screenOptions={defaultNavOptions}>
    <RootStack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{
        headerTitle: "หน้าแรก",
        headerStyle: {
          backgroundColor: Colors.ocean,
        }
      }}
    />
    <RootStack.Screen
      name="SplashScreen2"
      component={SplashScreen2}
      options={{
        headerTitle: "CPU&RAM",
        headerStyle: {
          backgroundColor: Colors.ocean,
        },
      }}
    />
    <RootStack.Screen
      name="DataScreen"
      component={DataScreen}
      options={{
        headerTitle: "สถิติโควิด",
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;