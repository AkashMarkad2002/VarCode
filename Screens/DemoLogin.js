import { StyleSheet, Text, View, absolute, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Demo from './Demo'
import DemoOtp from './DemoOtp'

const DemoLogin = ({ navigation }) => {
    //email
    const [email, setemail] = useState('')
    const [emailerror, setemailrror] = useState(null)
    //password
    const[pass,setpass]=useState('')
    const[passerror,setpasserror]=useState(null)

    

    function validateemail(email) {
        const reg = /^[a-z0-9_.]{3,}[@][a-z0-9]{2,8}[.]{1}[a-z]{1,6}$/
        if ( email.length <2 || !reg.test(email)) {
           setemailrror ('Email is Not Valid,This email is not register')
           return false
        } else {
            setemailrror(null)
            return true
        }
    }

    function validtepass(pass){
        const reg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
        if(pass.length<2 || !reg.test(pass)){
            setpasserror('Password is Not Valid')
            return false
        }else{
            setpasserror(null)
            return true
        }
    }
    function validateall(){
        if(validateemail(email) && validtepass(pass)){
            navigation.navigate('DemoOtp')
        
        }else{
            validtepass(pass);
        }
    }
    return (
        <View style={{ backgroundColor: '#3D67FF', height: '100%', justifyContent: 'space-between' }}>
            <View>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate(Demo) }} >
                        <AntDesign name='left' size={30} style={styles.backArrow} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.login}>Log In</Text>
                </View>
            </View>

            <View style={{ margin: 5 }}>
                <View style={styles.google}>

                    <Image source={require('./Images/Google.png')} />
                    <Text style={{ color: 'black', fontWeight: '700' }}>Log In with Google</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate() }}>
                        <AntDesign name='arrowright' size={30} color={'#111'} />
                    </TouchableOpacity>
                </View>

                <Text style={{ color: 'white', marginLeft: 24, marginBottom: -5 }}>Email Address</Text>
                <View style={styles.mail}>
                    <Feather name='mail' size={30} color={'#111'} />
                    <TextInput value={email}  onChangeText={(email) => {
                           validateemail(email);
                            setemail(email)
                        }} placeholder='Email Address' placeholderTextColor={'gray'} style={{ color: 'black' }} />
                </View>
                <Text style={{color:'red',marginLeft:24,marginTop:5}}>{emailerror}</Text>


                <Text style={{ color: 'white', marginLeft: 24, marginBottom: -5 }}>Password</Text>
                <View style={styles.mail}>
                    <Feather name='lock' size={30} color={'#111'} />
                    <TextInput value={pass} onChangeText={(pass)=>{
                        validtepass(pass),setpass(pass)
                    }} placeholder='Password' placeholderTextColor={'gray'} style={{ color: 'black' }} />
                </View>
                <Text style={{color:'red',marginLeft:24,marginTop:5}}>{passerror}</Text>

            </View>

            <View>
                <TouchableOpacity onPress={() => {validateall() }}>
                    <Text style={styles.loginButton} >Log In</Text>
                </TouchableOpacity>
            </View>







        </View>
    )
}

export default DemoLogin

const styles = StyleSheet.create({
    backArrow: {
        color: 'white',
        left: 20,
        top: 20
    },
    login: {
        position: absolute,
        left: 30,
        top: 30,
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 36,
        lineHeight: 44,
        color: 'white'
    },
    loggoogle: {
        backgroundColor: 'white',
        borderRadius: 20
    },
    loginButton: {
        backgroundColor: 'black',
        // textAlignVertical:'center',
        textAlign: 'center',
        marginBottom: 30,
        paddingBottom: 12,
        paddingTop: 12,
        margin: 20,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    google: {
        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 20,
        marginRight: 20, padding: 13, marginLeft: 20, marginBottom: 10

    },
    mail: {
        flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, marginRight: 20, padding: 8, marginLeft: 20, marginTop: 8, alignItems: 'center'
    }
})