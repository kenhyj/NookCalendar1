import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React, {useState} from "react";
import axios from 'axios';


export default function Tab1({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text>Tab1 Page. It is empty here.</Text> 
      <StatusBar style="auto" />
    </View>
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
