import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Signup and Login for
// import Signup from "./Screens/Signup";
// import Login from "./Screens/Login";

// for figma

import Demo from './Screens/Demo';
import DemoLogin from './Screens/DemoLogin';
import DemoSignUp from './Screens/DemoSignUp';
import DemoOtp from './Screens/DemoOtp';
import DemoHomeFeed from './Screens/DemoHomeFeed';

import Main from './Screens/TabNavigation/Main';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Demo' screenOptions={{ headerShown: false }}>

        {/* <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />  */}

        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name='DemoLogin' component={DemoLogin} />
        <Stack.Screen name='DemoSignUp' component={DemoSignUp} />
        <Stack.Screen name='DemoOtp' component={DemoOtp} />
        <Stack.Screen name='DemoHomeFeed' component={DemoHomeFeed}/>

        <Stack.Screen name='Main' component={Main}/>

      </Stack.Navigator>
    </NavigationContainer>

  );

}
export default App;

const styles = StyleSheet.create({

});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Main from './Screens/TabNavigation/Main'
// import { NavigationContainer } from '@react-navigation/native';
// const App = () => {
//   return (
//   <NavigationContainer>
//       <Main />
//  </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})