import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TextField from '../../Components/Customs/TextField'
import { SignInFields } from '../../Services/Constants/FIELDS'
import Header from '../../Components/Common/Header'
import CustomButton from '../../Components/Customs/Button'
import styles from './Styles'
import { comnPost } from '../../Services/Api/CommonServices'
import { connect } from 'react-redux'
import { saveAccess_token } from '../../Reducers/CommonActions'

const SignIn = ({ navigation, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setValue = (val, isVal, index) => {
    switch (index) {
      case 0:
        setEmail(val)
        break;
      case 1:
        setPassword(val)
        break;
    }
  }

  const getValue = (i) => {
    switch (i) {
      case 0:
        return email
      case 1:
        return password
    }
  }

  const Login = () => {
    const data = {
      email,
      password
    }
    comnPost('auth/login', data)
      .then(res => {
        props.saveAccess_token(res.data.data.access_token)
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  const signUpScreen = () => {
    navigation.navigate('SignUp');
    console.log('clicked');
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Header name={'Login'} style={{ marginBottom: 50 }} />
      {SignInFields.map((field, index) => {
        return (
          <TextField
            name={field.name}
            label={field.name}
            placeholder={field.placeholder}
            fieldType={field.type}
            length={field.length}
            required={field.required}
            disabled={field.disabled}
            value={getValue(index)}
            setChild={(v, i) => setValue(v, i, index)}
          />
        )
      })}
      <CustomButton
        title={'Login'}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitle}
        disabled={false}
        raised={true}
        type={'Submit'}
        onPress={() => Login()}
      />
      <View style={styles.haveAcc}>
        <Text>Don't have an Account? </Text>
        <TouchableOpacity onPress={() => signUpScreen()}><Text> Sign Up</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    access_token: state.commonState.access_token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveAccess_token: data => {
      dispatch(saveAccess_token(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
