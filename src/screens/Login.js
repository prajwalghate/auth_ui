import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackGround from '../components/BackGround';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import colors from '../components/colors';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BackGround>
      <View style={{position: 'absolute', top: 60, left: 10}}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcome}>Back</Text>
      </View>
      <View style={{height:"100%",justifyContent:"center"}}>
        
        <View style={styles.form}>
          <View style={{alignItems: 'center'}}>
            <TextInput
              placeholderTextColor={'#252525'}
              placeholder="Username"
              color={colors.black}
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <TextInput
              placeholderTextColor={'#252525'}
              placeholder="Password"
              color={colors.black}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View style={styles.loginButton}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: colors.secondary,
                fontSize: 35,
              }}>
              Login
            </Text>
          </View>
          <TouchableOpacity onPress={() => console.log('arrow pressed')}>
            <View style={styles.loginIcon}>
              <Image
                source={require('../assets/arrow.png')}
                style={{height: 40, width: 40}}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: height * 0.1,
          }}>
          <View>
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: colors.black,
                borderBottomWidth: 1,
              }}>
              Sign Up
            </Text>
          </View>
          <View>
            <Text
              onPress={() => console.log('pressed')}
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: colors.black,
                borderBottomWidth: 1,
              }}>
              Forgot Password
            </Text>
          </View>
        </View>
      </View>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: colors.text,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
  },
  form: {
    marginTop: height * 0.04,
  },
  input: {
    marginTop: height * 0.02,
    width: width - 50,
    borderBottomWidth: 1.5,
  },
  loginButton: {
    marginTop: height * 0.04,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
