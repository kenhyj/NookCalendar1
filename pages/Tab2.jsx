import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from "react";

export default function Tab2({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* <Text>Login Page</Text>  */}
      <View>
        <TextInput editable placeholder='Username' value={username} onChange={setUsername}/>
      </View>
      <View>
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
