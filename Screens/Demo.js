import { StyleSheet, Text, View, Image, absolute, TouchableOpacity} from 'react-native'
import React from 'react'
import DemoLogin from './DemoLogin'
import DemoSignUp from './DemoSignUp'

const Demo = ({navigation}) => {
  return (
    <View style={{ backgroundColor: `#3D67FF`, flex: 1 }}>
      <View>
        <Image style={styles.HomeLogo} source={require('./Images/1stpagelogo.png')} />
      </View>
      <View>
        <Text style={styles.welcome}>Welcome to</Text>
      </View>
      <View>
        <Text style={styles.varcode}>VarCode</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate(DemoSignUp)}} >
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate(DemoLogin)}} >
          <Text style={styles.login}>Log In</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>
        <DemoLogin></DemoLogin>
      </Text> */}
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
  HomeLogo: {
    position: absolute,
    left: 90.87,
    right: 5.56,
    top: 110,
    bottom: 64.73
  },
  welcome: {
    top: 135,
    left: 125,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF'

  },
  varcode: {
    top: 135,
    left: 55,
    fontSize: 60,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  signup: {
    width: 150,
    height: 50,
    left: 24,
    top: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical:'center'

  },
  login: {
    width: 150,
    height: 50,
    left: 55,
    top: 400,
    backgroundColor: 'black',
    borderRadius: 20,
    color: '#FFFFFF',
    justifyContent:'center',
    fontWeight: 'bold',
    position:'absolute',
    textAlign:'center',
    textAlignVertical:'center'
  }
})