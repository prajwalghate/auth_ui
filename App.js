import React from 'react';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();
const AuthScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthScreen />
      </NavigationContainer>
    </>
  );
};

export default App;
