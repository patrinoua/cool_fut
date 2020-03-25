import React from 'react'
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import Form from './Form'
export default function App() {
  const data = {
    name: 'Michael',
    lastname: 'Von Herringen',
    streetAdress: '59, Rue de Rivoli',
    passportNumber: 'DE 445299',
    postalCode: '11399',
    email: 'client@firma.de',
    country: 'Germany',
    username: 'MichVonH'
  }
  return (
    <ScrollView style={styles.container}>
      <Form data={data} />
      <KeyboardAvoidingView />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 30,
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30
  }
})
