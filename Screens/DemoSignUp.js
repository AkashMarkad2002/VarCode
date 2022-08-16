import { StyleSheet, Text, View, TouchableOpacity, absolute, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons'
import Feather from 'react-native-vector-icons/Feather'
import DemoLogin from './DemoLogin'

const DemoSignUp = ({ navigation }) => {
    //for username
    const [Username, setusername] = useState('')
    const [nameerror, setnameerror] = useState(null)

    // for email
    const [Email, setemail] = useState('')
    const [EmailError, setemailerror] = useState(null)

    // for password
    const [UserPassword, setpassword] = useState('')
    const [PasswordError, setpasswordError] = useState(null)

    //function creation
    function validateusername(name) {
        const reg = /^[A-Z][a-z0-9]{2,15}$/
        if (name.length < 2 || !reg.test(name)) {
            setnameerror('Enter the valid UserName')
            return false
        }
        else {
            setnameerror(null)
            return true
        }
    }
    //fuction creation for email

    function validateemail(email) {
        const reg = /^[a-z0-9_.]{3,}[@][a-z0-9]{2,8}[.]{1}[a-z]{1,6}$/
        if (email.length < 2 || !reg.test(email)) {
            setemailerror('Enter Valid Email')
            return false
        } else {
            setemailerror(null)
            return true
        }
    }

    // function creation password

    function validatePassword(pass) {
        const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
        if (pass.length < 2 || !reg.test(pass)) {
            setpasswordError("Password is not valid ,At least 1 Upper case letter,Minimum 8 char")
            return false
        } else {
            setpasswordError(null)
            return true
        }
    }

    function ValidateAll(){
        if(validateusername(Username) && validateemail(Email) && validatePassword(UserPassword) ){
         navigation.navigate('DemoLogin')
        }else if (validateemail(Email) && validatePassword(UserPassword)){
            validateemail(Email)
        }else{
            validatePassword(UserPassword)
        }
    }

    return (
        <View style={{ backgroundColor: '#3D67FF', height: '100%', justifyContent: 'space-between' }}>
            <View>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Demo') }}>
                        <Feather style={styles.back} name='arrow-left-circle' size={30} color={'black'} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.login}>Sign Up</Text>
                </View>
            </View>

            <View>
                <Text style={{ color: 'white', marginLeft: 24, marginBottom: -5 }}>Username</Text>
                <View style={styles.mail}>

                    <Feather name='user' size={30} color={'#111'} />
                    <TextInput value={Username}
                        onChangeText={(text) => {
                            validateusername(text);
                            setusername(text)
                        }} placeholder='Username' placeholderTextColor={'gray'} style={{ color: 'black' }} />
                </View>
                {Error && <Text style={{ color: 'red', marginLeft: 23, marginTop: 4 }}>{nameerror}</Text>}


                <Text style={{ color: 'white', marginLeft: 24, marginBottom: -5 }}>Email Address</Text>
                <View style={styles.mail}>
                    <Feather name='mail' size={30} color={'#111'} />
                    <TextInput value={Email} onChangeText={(email) => {
                        validateemail(email); setemail(email)
                    }} placeholder='Email Address' placeholderTextColor={'gray'} style={{ color: 'black' }} />
                </View>
                {Error && <Text style={{ color: 'red', marginLeft: 23, marginTop: 4 }}>{EmailError}</Text>}



                <Text style={{ color: 'white', marginLeft: 24, marginBottom: -5 }}>Password</Text>
                <View style={styles.mail}>
                    <Feather name='lock' size={30} color={'#111'} />
                    <TextInput value={UserPassword} onChangeText={(pass) => {
                        validatePassword(pass);
                        setpassword(pass)
                    }} placeholder='Password' placeholderTextColor={'gray'} style={{ color: 'black' }} />
                </View>
                {Error && <Text style={{ color: 'red', marginLeft: 23, marginTop: 4 }}>{PasswordError}</Text>}

            </View>

            <View>
                <TouchableOpacity onPress={()=>{ValidateAll()}}>
                    <Text style={styles.loginButton} >Continue</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default DemoSignUp

const styles = StyleSheet.create({
    back: {
        color: 'white',
        left: 20,
        top: 20
    },
    login: {
        position: absolute,
        left: 24,
        top: 30,
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 36,
        lineHeight: 44,
        color: 'white'
    },
    mail: {
        flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, marginRight: 20, padding: 8, marginLeft: 20, marginTop: 8, alignItems: 'center'
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
})