
import { View, Text,Image } from 'react-native'
import React from 'react'
import CardCrousel  from '../CardCrousel'

const One = () => {
  return (
    <View style={{backgroundColor:'#3D67FF',height:'100%'}}>
      <Image source={require('../Images/Wave.png')} style={{position:'absolute',marginTop:'90%'}} />
      <Text style={{color:'#fff',margin:'10%',fontSize:35,fontWeight:'bold'}}>Home Feed</Text>
      <View>
        <Text style={{color:'#fff',margin:'5%',fontSize:20,fontWeight:'600'}}>Javascript</Text>
       <CardCrousel />
      </View>
      
    </View>
  )
}

export default One


















// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Two from './Two'
// import CardCrousel from '../CardCrousel'
// const One = ({ navigation }) => {
//   return (
//     <View style={styles.one}>

//       <View>
//         <Text style={styles.homefeed}>Home Feed</Text>
//         <Text style={styles.javascript}>JavaScript</Text>
//       </View>

//       <View style={styles.variable}>
//         <Text style={styles.javac}>JAVASCRIPT COURSE</Text>
//         <Text style={styles.var}>Variables</Text>
//       </View>


//       <View style={styles.container1}>
//         <Text style={{ color: 'grey', fontSize: 10, marginTop: 20, marginLeft: 25, marginRight: 10, width: 220 ,marginBottom:15}}> A javaScript variable is simply a name of storage location</Text>
//       </View>

//       <View style={styles.cont}>
//         <View style={styles.container2}>
//           <TouchableOpacity style={{ flexDirection: 'row' }} >
//             <Text style={{ color: '#000000', fontSize: 10, marginTop: 13, marginLeft: 35, marginRight: 10, fontWeight: '500', fontSize: 14 }}>Community Forums  5 min</Text>
//             <AntDesign style={styles.com} name='right' size={25} color={'black'} />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.container2}>
//           <TouchableOpacity style={{ flexDirection: 'row' }}>
//             <Text style={{ color: '#000000', fontSize: 10, marginTop: 13, marginLeft: 35, marginRight: 10, fontWeight: '500', fontSize: 14 }}>Review Concept  5 min</Text>
//             <AntDesign style={styles.com2} name='right' size={25} color={'black'} />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.container3}>
//           <TouchableOpacity style={{ flexDirection: 'row' }}>
//             <Text style={{ color: '#000000', fontSize: 10, marginTop: 13, marginLeft: 35, marginRight: 10, fontWeight: '500', fontSize: 14 }}>Practice Skills  5 min</Text>
//             <AntDesign style={styles.com3} name='right' size={25} color={'black'} />
//           </TouchableOpacity>
//         </View>

//       </View>


// <CardCrousel/>

//     </View>

//   )
// }

// export default One

// const styles = StyleSheet.create({
//   one: {
//     backgroundColor: '#3D67FF',
//     flex: 1
//   },
//   homefeed: {
//     position: 'absolute',
//     margin: 30,
//     marginLeft: 20,
//     marginTop: 40,
//     fontFamily: 'Cochin',
//     fontSize: 36,
//     color: '#FFFFFF',
//     fontWeight: '700'
//   },
//   javascript: {
//     fontWeight: '600',
//     color: '#FFFFFF',
//     top: 148,
//     left: 20,
//     fontSize: 20
//   },
//   variable: {
//     backgroundColor: '#14D39A',
//     borderRadius: 0,
//     marginTop: 160,
//     marginLeft: 43,
//     marginRight: 30,
//     borderTopRightRadius:15,
//     borderTopLeftRadius:15
//   },
//   javac: {
//     fontSize: 12,
//     left: 15,
//     top: 5,
//     color: '#FFFFFF',

//   },
//   var: {
//     left: 15,
//     top: 2,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     lineHeight: 36,
//     fontSize: 26,
//     marginBottom: 10

//   },
//   container1: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     marginTop: 0,
//     marginLeft: 43,
//     marginRight: 30,

//   },
//   container2: {
//     backgroundColor: 'white',
//     marginLeft: 43,
//     marginRight: 30,
//     flexDirection: 'row',
//     alignContent: 'center',
//   },
//   container3: {
//     backgroundColor: 'white',
//     marginLeft: 43,
//     marginRight: 30,
//     flexDirection: 'row',
//     alignContent: 'center',
//     paddingBottom: 30,
//     borderBottomLeftRadius:10,
//     borderBottomRightRadius:10
//   },
//   com: {
//     marginTop: 13,
//     marginLeft: 14
//   },
//   com2: {
//     marginTop: 13,
//     marginLeft: 37
//   },
//   com3: {
//     marginTop: 13,
//     marginLeft: 47
//   },

// })
