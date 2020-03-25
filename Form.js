import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import validate from './validations'

export default function Form({ data }) {
  const onSubmit = () => {
    const error = validate(name, lastname, email, password, passwordRepeat)
    if (error.length === 0) {
      alert('Thank you, your form has been submitted.')
      return
    }
    alert(error)
  }

  const [name, setName] = useState(data.name)
  const [lastname, setLastname] = useState(data.lastname)
  const [email, setEmail] = useState(data.email)
  const [postalCode, setPostalCode] = useState(data.postalCode)
  const [streetAddress, setStreetAddress] = useState(data.streetAdress)
  const [country, setCountry] = useState(data.country)
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [username, setUsername] = useState(data.username)

  const inputComponent = ({ label, inputField, hookFunction, ...props }) => (
    <View>
      <Text style={styles.heading}>{label}</Text>
      <TextInput
        onChangeText={inputField => hookFunction(inputField)}
        value={inputField}
        style={styles.input}
        {...props}
      />
    </View>
  )
  const passportAlert = () =>
    alert(
      'Please note you will have to go through the "Know Your Customer" to update your Passport details.'
    )
  const uploadPhotoAlert = () => alert('Select a picture modal opens')
  return (
    <React.Fragment>
      {inputComponent({
        label: 'Name',
        inputField: name,
        hookFunction: setName
      })}
      {inputComponent({
        label: 'Lastname',
        inputField: lastname,
        hookFunction: setLastname
      })}

      {inputComponent({
        label: 'Passport Number',
        inputField: data.passportNumber,
        onFocus: passportAlert
      })}
      {inputComponent({
        label: 'Street Address',
        inputField: streetAddress,
        hookFunction: setStreetAddress
      })}
      {inputComponent({
        label: 'Postal Code',
        inputField: postalCode,
        hookFunction: setPostalCode
      })}
      {inputComponent({
        label: 'Country',
        inputField: country,
        hookFunction: setCountry
      })}
      {inputComponent({
        label: 'Email Address',
        inputField: email,
        hookFunction: setEmail
      })}
      {inputComponent({
        label: 'Password',
        inputField: password,
        hookFunction: setPassword,
        secureTextEntry: true
      })}
      {inputComponent({
        label: 'Repeat Password',
        inputField: passwordRepeat,
        hookFunction: setPasswordRepeat,
        secureTextEntry: true
      })}
      {inputComponent({
        label: 'Username',
        inputField: username,
        hookFunction: setUsername
      })}
      <View style={styles.uploadPhotoContainer}>
        <TouchableOpacity style={styles.uploadPhoto} onPress={uploadPhotoAlert}>
          <Text style={styles.uploadPhotoSymbol}>+</Text>
        </TouchableOpacity>
        <Text style={styles.uploadPhotoText}>Upload Avatar Photo</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.emptySpace} />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 25,
    color: 'darkgrey'
  },
  input: {
    alignSelf: 'stretch',
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    height: 30
  },
  button: {
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: 'rgb(0, 200, 81)',
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    fontSize: 20
  },
  buttonText: {
    fontSize: 24,
    padding: 10,
    color: 'white'
  },

  uploadPhotoContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 30
  },
  uploadPhoto: {
    height: 40,
    width: 40,
    backgroundColor: 'lightgrey',
    borderColor: 'darkgrey',
    borderRadius: 50,
    justifyContent: 'center',
    textAlign: 'center'
  },
  uploadPhotoSymbol: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25
  },
  uploadPhotoText: {
    fontSize: 20,
    color: 'darkgrey',
    alignSelf: 'center',
    marginLeft: 10
  },
  emptySpace: {
    height: 50
  }
})
