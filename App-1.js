import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default function App() {
  const reference = firestore().collection('Users');
  const [input, setInput] = useState('')

  const submit = () => {
    if(input.length <= 0){
      return alert("Enter Text")
    }
    addText()
  }
 
  const addText = async () => {
    await reference.add({
          title: input,
          complete: false
    })
    setInput('')
    alert("Message sent successfully!")
  }

  return (
    <View style={styles.parent}>
      <TextInput value={input} onChangeText={setInput} placeholder="Enter text..." style={styles.input}/>
      <TouchableOpacity onPress={submit}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  parent: {
    marginTop: 50,
    flexDirection: 'row',
  },
  input: {
    width: '70%',
    height: 50,
    backgroundColor: '#ccc'
  },
  button: {
    padding: 15,
    width: 100,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#333'
  }
})
