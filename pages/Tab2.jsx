import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from "react";
import {Feather as FeatherIcon, MaterialIcons} from 'react-native-vector-icons';

export default function Tab2({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>These are just place holders. They don't do anything</Text>
      <View>
        <FeatherIcon name="user" size={30}/>
        <TextInput editable placeholder='Username' value={username} onChange={setUsername}/>
      </View>
      <View>
        <MaterialIcons name="lock" size={30} />
        <TextInput editable placeholder='Password' value={password} onChange={setPassword}/>
      </View>
      {/* <Button></Button> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
