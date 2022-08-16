import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Login = ({navigation}) => {

  const[Username,setusername]= useState('')
  const[nameerror,setnameerror]= useState(null)

  function validateusername(name){
    if(name.length<3)
    {
      setnameerror ('username is not valid')
    }
    else{
      setnameerror(null)
  }
  }
  

  

  return (

   <ScrollView>
      
    <Text style={styles.signup}>Login</Text>

    <View style={{flexDirection:'row', alignItems:'center',alignSelf:'center',marginBottom:20}}>
    <Text style={{ color:'black',marginBottom:30,fontSize:15}}>Already have account ?</Text>
    <TouchableOpacity><Text style={{color:'black',alignSelf:'center',marginBottom:30,fontWeight:'bold'}}> Signup</Text></TouchableOpacity>
    </View>

  
    
    <View style={styles.ContainerInput}>
      <FontAwesome name='user-secret' size={30} style={{margin:10,color:'black'}}/>
      <TextInput placeholder=' Username ' 
      placeholderTextColor={'gray'}
      value={Username}
      onChangeText={(text)=>{
        validateusername(text)
        setusername(text)
      }}
      autoCapitalize='none' autoCorrect={false} />
    </View>
    <Text style={{color:'red'}}>
      {nameerror}
    </Text>

    <View style={styles.ContainerInput}>
      <FontAwesome name='key' size={30} style={{margin:10,color:'black'}}/>
      <TextInput  placeholder='Password' autoCapitalize='none' autoCorrect={false} placeholderTextColor={'grey'}/>
    </View>

    
    

      {/* Button */}
      
    <View >
    <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.registrationButton}><Text style={{color:'white'}}>LOGIN</Text></TouchableOpacity>
    </View>

<View style={{flexDirection:'row'}}>
  <View style={{borderBottomWidth:1,width:'50%',marginBottom:10}}></View>
  <Text style={{fontsize:49,marginTop:15}}> or </Text>
  <View style={{borderBottomWidth:1,width:'50%',marginBottom:10}}></View>
</View>
    {/* //Images */}

    <View style={{flexDirection:'row'}}>
      <Image
        source={require('./Images/google1.png')}
        style={styles.container}
       /> 
 
      <Image
        source={require('./Images/facebook.png')}
        style={styles.container}
      /> 
      
        <Image source={require('./Images/twitter.png')}
         style={styles.container}
         />
      <Image source={require('./Images/apple.png')}
      style={styles.container}/>

   </View>

   </ScrollView>
  )
  
}

export default Login

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    marginLeft:20,
    width:70,
    height:70,
  },
  
 signup:{
  textAlign:'center',marginTop:50,fontSize:40,fontWeight:'bold',color:'black'
 },
ContainerInput:{
  marginBottom:-2,borderWidth:1,margin:20,borderRadius:14,flexDirection:'row'
},
registrationButton:{
  marginLeft:18,backgroundColor:'#4169e1',paddingBottom:10,paddingTop:10,alignItems:'center', marginTop:30,marginRight:18,borderRadius:20,color:'green'
}
});