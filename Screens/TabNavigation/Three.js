import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ToggleSwitch from 'toggle-switch-react-native'
import SwitchToggle from "react-native-switch-toggle";
const Three = () => {
  const [isOn, setIsOn] = useState(false);
  const [isOns, setIsOns] = useState(false);
  return (
    <View style={styles.setting}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.ellipse} source={require('../Images/Ellipse1.png')} />
        <View>
          <Text style={styles.s} >Akash</Text>
          <Text style={styles.s1}>Premium Enabled</Text></View>
        <View>
          <Text style={styles.s2}>Edit</Text></View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', marginTop: 30, marginLeft: 16 }}>Your Stats</Text>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#FFA439', marginTop: 30, marginLeft: 170 }}>3</Text>
        <Image style={{ marginTop: 30, marginLeft: 12 }} source={require('../Images/Vector.png')} />
      </View>

      <View >
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.cout}>3</Text>
          <Text style={styles.writ}>CURRENT STREAK</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.cout1}>7</Text>
          <Text style={styles.writ1}>BEST STREAK</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.cout2}>135</Text>
          <Text style={styles.writ2}>QUESTIONS ATTEMPTED</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.cout3}>114</Text>
          <Text style={styles.writ3}>QUESTIONS SOLVED</Text>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 22, fontWeight: '700', color: 'white', marginTop: 55,marginBottom:30, marginLeft: 16 }}>Notifications</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white', width: 270, marginLeft: 20, marginTop: 10,marginBottom:10 }}>Recieve daily reminders to consistently Practice and review concept.</Text>
        <SwitchToggle style={styles.togbutton}
        switchOn={isOns}
        onPress={() => setIsOns(!isOns)}
        circleColorOff="white"
        circleColorOn="white"
        backgroundColorOn="#14D39A"
        backgroundColorOff="#C4C4C4"
        containerStyle={{
          marginTop: 16,
          width: 60,
          height: 30,
          borderRadius: 25,
          padding: 5,
          marginLeft:7
        }}
        circleStyle={{
          width: 23,
          height: 23,
          borderRadius: 20,
        }}
      />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white', marginLeft: 20, marginTop: 10, width: 270 }}>Recieve notifications for whenever there may be a new resource to help you on your coding journey</Text>
        <SwitchToggle  style={styles.togbutton}
        switchOn={isOn}
        onPress={() => setIsOn(!isOn)}
        circleColorOff="white"
        circleColorOn="white"
        backgroundColorOn="#14D39A"
        backgroundColorOff="#C4C4C4"
        containerStyle={{
          marginTop: 16,
          width: 60,
          height: 30,
          borderRadius: 25,
          padding: 5,
          marginLeft:7
        }}
        circleStyle={{
          width: 23,
          height: 23,
          borderRadius: 20,
        }}
     
      />
      </View>
    </View>
  )
}

export default Three

const styles = StyleSheet.create({
  setting: {
    backgroundColor: '#3D67FF',
    flex: 1
  },
  ellipse: {
    marginLeft: 20, marginTop: 20
  },
  s: {
    fontSize: 20, fontWeight: '700', marginTop: 29, marginLeft: 15, color: 'white'
  },
  s1: {
    fontSize: 13, fontWeight: '500', color: 'white', marginLeft: 15
  },
  s2: {
    fontSize: 14, fontWeight: '500', color: 'white', marginLeft: 65, marginTop: 40, color: '#FFC839'
  },
  cout: {
    marginTop: 30, fontSize: 30, color: 'white', fontWeight: '700', marginLeft: 18
  },
  writ: {
    marginTop: 39, fontSize: 14, fontWeight: '700', color: 'white', marginLeft: 120
  },
  cout1: {
    fontSize: 30, color: 'white', fontWeight: '700', marginLeft: 18
  },
  writ1: {
    fontSize: 14, fontWeight: '700', color: 'white', marginLeft: 120, marginTop: 12
  },
  cout2: {
    fontSize: 30, color: 'white', fontWeight: '700', marginLeft: 18
  },
  writ2: {
    fontSize: 14, fontWeight: '700', color: 'white', marginLeft: 80, marginTop: 12
  },
  cout3: {
    fontSize: 30, color: 'white', fontWeight: '700', marginLeft: 18
  },
  writ3: {
    fontSize: 14, fontWeight: '700', color: 'white', marginLeft: 80, marginTop: 12
  },
 togbutton:{

 }
})