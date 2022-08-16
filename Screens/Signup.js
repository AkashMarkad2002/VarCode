import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Signup = ({navigation}) => {

//Username
  const[Username,setusername]= useState('')
  const[nameerror,setnameerror]= useState(null)

//Email
  const [Email,setemail]= useState('')
  const [EmailError,setemailerror]=useState(null)

//Password
const[UserPassword,setpassword]=useState('')
const[PasswordError,setpasswordError]=useState(null)

//confirm Password
const[confirmPass,setConfirmPass]=useState('')
const[confirmpassError,setConfirmPassError]=useState(null)

 //function Create for Username 
function validateusername(name){
    const reg=/^[A-Z][a-z0-9]{2,15}$/
    if(name.length<2 || !reg.test(name))
    {
      setnameerror ('Enter the valid UserName')
    }
    else{
      setnameerror(null)
  }
  }
  
  ////function Create for email
  function validateemail(email){
    const reg=/^[a-z0-9_.]{3,}[@][a-z0-9]{2,8}[.]{1}[a-z]{1,6}$/
    if(email.length<2 || !reg.test(email)){
      setemailerror('Enter Valid Email')
    }else{
      setemailerror(null)
    }
  }
  
  ////function Create for Password
  function validatePassword(pass){
    const reg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
    if(pass.length<2 || !reg.test(pass)){
      setpasswordError("Password is not valid ,At least 1 Upper case letter,Minimum 8 char")
    }else{
      setpasswordError(null)
    }
  }

  // function create foe confirm password

  function validateConfirmPass(ConPass){
    if(ConPass !== UserPassword){
      setConfirmPassError('Password Not Match Please enter correct password')
    }else{
      setConfirmPassError(null)
    }
  }
  return (

    ////function Create for Confirm Password
   <ScrollView>
      
    <Text style={styles.signup}>Signup</Text>

    <View style={{flexDirection:'row', alignItems:'center',alignSelf:'center',marginBottom:20}}>
    <Text style={{ color:'black',marginBottom:30,fontSize:15}}>Already have account ?</Text>
    <TouchableOpacity><Text style={{color:'blue',alignSelf:'center',marginBottom:30}}> Login</Text></TouchableOpacity>
    </View>

  
    <View style={styles.ContainerInput }>
      <FontAwesome name='user-secret' size={30} style={{margin:10,color:'black'}}/>
      <TextInput 
    value={Username}
    onChangeText={(text)=>{
      validateusername(text);
      setusername(text)
    }}
    placeholderTextColor={'black'} placeholder='Username' autoCapitalize='none' autoCorrect={false} style={{color:'black'}}/>
    </View>
{Error &&<Text style={{color:'red',marginLeft:23,marginTop:4}}>{nameerror}</Text>}


    <View style={styles.ContainerInput}>
      <FontAwesome name='at' size={30} style={{margin:10,color:'black'}}/>
      <TextInput value={Email} onChangeText={(email)=>{
        validateemail(email); setemail(email)  }}  placeholderTextColor={'black'}
     placeholder='Email' autoCapitalize='none' autoCorrect={false} style={{color:'black'}}/>
    </View>  
 {Error && <Text style={{color:'red',marginLeft:23,marginTop:4}}>{EmailError}</Text>}


    <View style={styles.ContainerInput}>
      <FontAwesome name='key' size={30} style={{margin:10,color:'black'}}/>
      <TextInput value={UserPassword} onChangeText={(pass)=>{
        validatePassword(pass);
        setpassword(pass)
      }}
      placeholderTextColor={'black'} placeholder='Password' autoCapitalize='none' autoCorrect={false} style={{color:'black'}} />
    </View>
{Error && <Text style={{color:'red',marginLeft:23,marginTop:4}}>{PasswordError}</Text>}


    <View style={styles.ContainerInput}>
      <FontAwesome name='key' size={30} style={{margin:10,color:'black'}}/>
      <TextInput value={confirmPass} onChangeText={(CPass)=>{
        validateConfirmPass(CPass);
        setConfirmPass(CPass)
      }}
      placeholderTextColor={'black'} placeholder='Confirm Password' autoCapitalize='none' autoCorrect={false} style={{color:'black'}}/>
    </View>
    <Text style={{color:'red',marginLeft:23,marginTop:4}}>{confirmpassError}</Text>


      {/* Button */}
      
    <View >
    <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.registrationButton}><Text style={{color:'white'}}>REGISTER NOW</Text></TouchableOpacity>
    </View>

<View style={{flexDirection:'row'}}>
  <View style={{borderBottomWidth:1,width:'50%',marginBottom:10}}></View>
  <Text style={{fontsize:49,marginTop:15}}> or </Text>
  <View style={{borderBottomWidth:1,width:'50%',marginBottom:10}}></View>
</View>
    {/* //Images */}

    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('')}>
      <Image 
        source={require('./Images/google1.png')}
        style={styles.container}
       /> 
       
      </TouchableOpacity>
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
  );
  
}

export default Signup

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
  marginBottom:-2,borderWidth:1,margin:20,borderRadius:14,flexDirection:'row', 
},
registrationButton:{
  marginLeft:18,backgroundColor:'#4169e1',paddingBottom:10,paddingTop:10,alignItems:'center', marginTop:30,marginRight:18,borderRadius:20
},

});

