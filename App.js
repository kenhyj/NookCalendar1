import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Tab1, Tab2, TabJoke} from "./pages";


import reducers from "./redux";
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';

import {Feather as FeatherIcon, MaterialIcons} from 'react-native-vector-icons';

// https://reactnavigation.org/docs/drawer-based-navigation
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [jokes, setJokes] = useState("");

  const getJokes = () => {
    axios.get("https://v2.jokeapi.dev/joke/Any")
    .then( (response) => {
      // console.log(typeof (response.data) ) ;
      // console.log(response.data);
      if (response.data["type"] === "single") {
        setJokes(response.data["joke"])
      } else if (response.data["type"] === "twopart") {
        setJokes(response.data["setup"] + "\n" + response.data["delivery"])
      }
    })
    // .catch()
  }

  return (
    <StoreProvider store={createStore(reducers)}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Root"
            component={BottomTabNavigatorBar}
            // options={{headerShown: false}}
            >
          </Drawer.Screen>
          <Drawer.Screen name="show me a joke"
          component={TabJoke}>
          </Drawer.Screen>
        </Drawer.Navigator>
        {/* <BottomTabNavigatorBar/> */}
      </NavigationContainer>
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
    <Drawer.Navigator>
      {/* show me a joke */}

      {/* <Drawer.Navigator initialRouteName='JokeTab1'>
      <Drawer.Screen name="Tab1" component={Tab1} />
      <Drawer.Screen name="Tab2" component={Tab2} /> */}
    </Drawer.Navigator>
  )
}

const BottomTabNavigatorBar = () => {
  return (
    <Tab.Navigator initialRouteName='Tab1'>
      <Tab.Screen name="Tab1" component={Tab1} options={{tabBarIcon: ()=> {<MaterialIcons name="home" />} }}/>
      <Tab.Screen name="Tab2" component={Tab2} options={{tabBarIcon: ()=> {<MaterialIcons name="home" />} }}/>
    </Tab.Navigator>
  )
}
