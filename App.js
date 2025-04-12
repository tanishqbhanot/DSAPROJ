import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

const App = () => {

  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('')

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Enter you kink</Text>
      <TextInput
        placeholder='Kink......'
        style = {styles.input}
        value={text}
        onChangeText={(text)=> setText(text)}
      />
      <Button title='Check' onPress={handleSubmit}></Button>
      <Text>Result : </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 10,
    },
    title:{
        fontSize: 20,
        fontWeight: '500',
    },
    input:{
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    }
})