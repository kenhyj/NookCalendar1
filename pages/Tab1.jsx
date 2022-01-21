import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React, {useState} from "react";
import axios from 'axios';


export default function Tab1({navigation}) {
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
    <View style={styles.container}>
      <Text>Tab1 Page</Text> 
      <StatusBar style="auto" />
      <Button title="joke Button" onPress={() => {getJokes()} } />
      <Text>{jokes}</Text>
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
