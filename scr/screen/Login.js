import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

import Input from '../components/Input';

export default function Login({navigation}) {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const [typePassword] = useState(true);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleInput = name => text => {
    setForm({
      ...form,
      [name]: text,
    });
  };

  const handleSignin = () => {
    setForm({
      email: '',
      password: '',
    });
    if (form.email === '') {
      return false;
    } else if (form.password === '') {
      return false;
    }
    return navigation.navigate('Home');
  };

  return (
    <View style={styles.contaner}>
      <Image
        source={{
          uri: 'https://www.thelivingos.com/wp-content/uploads/2018/05/fav-800x452_c.png',
        }}
        style={{width: '90%', height: '45%'}}
        resizeMode="contain"
      />
      <View style={{width: '60%'}}>
        <Input
          styles={styles.inputStyle}
          placeholder="Login"
          placeholderTextColor="#000"
          value={form.email}
          onChangeText={handleInput('email')}
        />
      </View>
      <View style={{paddingTop: 20, width: '60%'}}>
        <Input
          styles={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="#000"
          value={form.password}
          secureTextEntry={typePassword}
          onChangeText={handleInput('password')}
        />
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          onPress={() => {
            handleSignin();
          }}>
          <Text style={styles.textButtonStyle}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cce3cb',
  },
  inputStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
    paddingLeft: 17,
    color: 'white',
    fontSize: 10,
    height: 40,
  },
  logoStyle: {
    fontSize: 30,
    color: '#f67',
    marginBottom: 20,
    fontWeight: '900',
  },
  buttonStyle: {
    backgroundColor: '#f78',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButtonStyle: {
    color: '#000',
    fontSize: 20,
  },
});
