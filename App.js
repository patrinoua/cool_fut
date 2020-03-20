import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading} placeholder="Name">
        Name
      </Text>
      <TextInput style={styles.input} placeholder="Name" />
      <Text style={styles.heading}>Last name</Text>
      <TextInput style={styles.input} placeholder="Last name" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 40
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 25,
    color: 'darkgrey'
  },
  input: {
    alignSelf: 'stretch',
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    height: 30
  }
})
