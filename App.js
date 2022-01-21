import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tab1 from "./pages/Tab1";
import Tab2 from './pages/Tab2';

import reducers from "./redux";
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';

// https://reactnavigation.org/docs/drawer-based-navigation
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StoreProvider store={createStore(reducers)}>
      <NavigationContainer>
        <DrawerNavigatorBar />
      </NavigationContainer>
      <View>
        <Text>kenhyj React Native</Text>
        {/* <NavigatorBar></NavigatorBar> */}
        <StatusBar style="auto" />
      </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StackNavigatorBar = () => {
  return (
    <Stack.Navigator initialRouteName='Tab1'>
      <Stack.Screen name="Tab1" component={Tab1} />
      <Stack.Screen name="Tab2" component={Tab2} />
    </Stack.Navigator>
  )
}

const DrawerNavigatorBar = () => {
  return (
    <Drawer.Navigator initialRouteName='Tab1'>
      <Drawer.Screen name="Tab1" component={Tab1} />
      <Drawer.Screen name="Tab2" component={Tab2} />
    </Drawer.Navigator>
  )
}

const BottomTabNavigatorBar = () => {
  return (
    <Tab.Navigator initialRouteName='Tab1'>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  )
}
