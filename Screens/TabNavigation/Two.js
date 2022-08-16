import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Two = ({ navigation }) => {
  return (
    <View style={styles.search}>

      <View style={styles.ser}>
        <AntDesign style={styles.ser2} name='search1' size={25} color={'grey'} />
        <TextInput  style={styles.ser1} placeholder='Search for a concept, term, or keyword.' placeholderTextColor={'grey'}>
        </TextInput>
      </View>

      <View style={styles.Searchdata}>
        <Text style={{ backgroundColor: 'white', marginLeft: 0, color: 'grey', padding: 1, borderRadius: 5 }}>Variables</Text>
        <Text style={{ backgroundColor: 'white', marginLeft: 5, color: 'grey', padding: 1, borderRadius: 5 }}>Functions</Text>
        <Text style={{ backgroundColor: 'white', marginLeft: 5, color: 'grey', padding: 1, borderRadius: 5 }}>Lorem Ipsum</Text>
      </View>

      <View>
        <Text style={styles.vark}>What can we help you find, vark?</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image style={styles.varimg} source={require('../Images/variableimg.png')} />
          <Text style={styles.vartext}>Variables</Text></View>
        <View>
          <Image style={styles.pythonimg} source={require('../Images/python.png')} />
          <Text style={styles.vartext2} >Variables</Text></View>
      </View>

      <Text style={{
        marginTop: 30,
        marginLeft: 24,

        fontSize: 20,
        fontWeight: '700',
        color: 'white',marginBottom:30
      }}>More ways to learn in 2021</Text>

      <View style={styles.big}>
      <Image style={styles.bigimg} source={require('../Images/img4.png')} />
      <Text style={styles.te}>Find what languages works for you!</Text>
      <Text style={styles.te1}>Lorem ipsum dolor sit amet,consectetur adipiscing elit,send do euismod tempor</Text>
      </View>

    </View >
  )
}

export default Two

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#3D67FF',
    flex: 1
  },
  ser: {
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 30,
    margin: 10,
    marginLeft: 20,
    marginRight: 20
  },
  ser1: {
    marginLeft: 30,
    marginTop: -35
  },
  ser2: {
    marginLeft: 5,
    marginTop: 7
  },
  Searchdata: {
    flexDirection: 'row',
    marginLeft: 25,

  },
  vark: {
    marginTop: 40,
    marginLeft: 24,
    marginRight: 0,
    fontSize: 24,
    fontWeight: '700',
    color: 'white'
  },
  varimg: {
    margin: 23, borderTopLeftRadius: 20, borderTopRightRadius: 20, width: 155
  },
  pythonimg: {
    margin: 23, borderTopLeftRadius: 20, borderTopRightRadius: 20, width: 155, marginLeft: 0
  },
  vartext: {
    backgroundColor: 'white',
    color: 'black',
    marginLeft: 23,
    marginRight: 23,
    marginTop: -25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    paddingBottom: 20,
    fontWeight: '500'
  },
  vartext2: {
    backgroundColor: 'white',
    color: 'black', fontWeight: '500',
    marginRight: 23, marginTop: -25, padding: 5, borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, paddingBottom: 20,
  },
  bigimg:{
    borderTopLeftRadius:20,borderTopRightRadius:20,alignSelf:'center'
  },
  te:{
    backgroundColor:'white',
    color:'black',fontSize:14,fontWeight:'700',lineHeight:17,marginTop:0,padding:7
  },
  te1:{
    backgroundColor:'white',
    color:'#7E7E7E',fontSize:12,lineHeight:15,fontWeight:'400',padding:7,borderBottomLeftRadius:20,borderBottomRightRadius:20
  }
})