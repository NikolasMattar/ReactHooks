import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("Nikolas")
  const [number, setNumber] = useState(1)

  return (
    <View style={styles.container}>
      <Text>Meu nome é {name}</Text>

      <TextInput
        onChangeText={setName}
        value={name}
        style= {styles.input}
      />

      <Text>o numero é {number}</Text>
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
  input: {
    height:40,
    margin:12,
    borderWidth: 1,
    padding:10,
  }
});
