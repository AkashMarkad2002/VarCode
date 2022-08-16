import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DemoLogin from './DemoLogin'
import DemoHomeFeed from './DemoHomeFeed'
import Main from './TabNavigation/Main'

const DemoOtp = ({ navigation }) => {
    return (
        <View>
            <View style={{ backgroundColor: '#3D67FF', height: '30%', justifyContent: 'space-between' }}>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate(DemoLogin) }} >
                        <Feather style={styles.back} name='arrow-left-circle' size={30} color={'black'} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.login}>Verify</Text>
                    </View>
                </View>

                <Image style={styles.mailimg} source={require('./Images/mailOtp.png')} />


            </View>

            <View style={styles.grey}>
                <View>
                    <Text style={styles.content}>Please check your email for the verification code sent to you.</Text>
                </View>
                <View style={styles.otp}>
                    <View style={styles.opt1}>
                        <TextInput style={styles.o} placeholder='0' placeholderTextColor={'white'}></TextInput>
                    </View>
                    <View style={styles.opt1}>
                        <TextInput placeholder='0' placeholderTextColor={'white'}></TextInput>
                    </View>
                    <View style={styles.opt1}>
                        <TextInput placeholder='0' placeholderTextColor={'white'}></TextInput>
                    </View>
                    <View style={styles.opt1}>
                        <TextInput placeholder='0' placeholderTextColor={'white'}></TextInput>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.opt2}>
                        Didn’t recieve an email?
                    </Text>
                    <Text style={styles.opt3}>
                    Send again
                    </Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate(Main)}}>
                        <Text style={styles.loginButton}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </View>





        </View>
    )
}

export default DemoOtp

const styles = StyleSheet.create({
    login: {
        left: 24,
        top: 30,
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 36,
        lineHeight: 44,
        color: 'white'
    },
    back: {
        color: 'white',
        left: 20,
        top: 20
    },
    grey: {
        backgroundColor: '#696969',
        height: '70%', justifyContent: 'space-between',
        zIndex: -1,
      
    },
    mailimg: {
        top: '23%',
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 1,

    },
    content: {
        textAlign: 'center',
        margin: 64,
        position: 'absolute',
fontWeight:'600'
    },
    otp: {
        flexDirection: 'row',
        margin: 130,
        marginLeft: 60,
        position: 'absolute'

    },
    opt1: {
        backgroundColor: '#808080',
        margin: 10,
       
        padding: 5,
        borderRadius: 10
    },
    loginButton: {
        backgroundColor: 'white',
        // textAlignVertical:'center',
        textAlign: 'center',
        marginBottom: 30,
        paddingBottom: 12,
        paddingTop: 12,
        margin: 20,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    opt2:{
marginTop:30,
marginLeft:50,
color:'white',
fontWeight:'500'
    },
    opt3:{
        color:'#FFA439',
        marginTop:30,
       marginLeft:0,
    },
    o:{
     textAlignVertical:'center'
    }
})