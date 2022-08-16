import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
// import AntDesign from '../android/app/src/main/assets/fonts/AntDegin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function InstaStory(props) {
  return (




<View >

<View style={{flexDirection:'row'}}>
<LinearGradient colors={['#8a2be2','#a52a2a']} style={{borderRadius:10,width:60,height:60,padding:3,marginTop:9,marginLeft:10}}>
<Image style={styles.Container} source={props.Image}/></LinearGradient>
<Text style={styles.Text}>{props.Title}</Text>
</View>



</View>










//  <SafeAreaView style={{margin:0}}> 
//    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:5}}>
//      <Text style={{color:'black',fontSize:30,fontFamily:'sans-serif-medium'}}>Instagram</Text>
    
//    </View>

   
      
//       <LinearGradient colors={['#8a2be2','#a52a2a','#5f9ea0',`#dc143c`]} style={{borderRadius:10,width:60,height:60,padding:3,marginTop:9,marginLeft:10}}>
//         <Image style={styles.Container} source={props.Image}/></LinearGradient>
//         <Text style={styles.Text}>{props.Title}</Text>
 
//   </SafeAreaView>
  )
};

const styles = StyleSheet.create({
   Container:{
    width:55,
    height:55,
    marginTop:1,
    borderRadius:30,
     
   },
Text:{

  fontSize:12,
  fontWeight:'500',
  marginLeft:9,
  alignSelf:'center',
  color:'black'
}
})