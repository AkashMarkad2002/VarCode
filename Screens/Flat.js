import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React from 'react'
import InstaStory from './InstaStory';

// import AntDesign from '../android/app/src/main/assets/fonts/AntDegin';
// import { SafeAreaView } from 'react-native-safe-area-context'

const newArray =[
     {
    key:'1',
    img: require('./Images/google1.png'),
    Name:'Google',
    mark:'80'
   },
   {
    key:'2',
    img: require('./Images/img1.jpg'),
    Name:'Google',
    mark:'80'
   },
   {
    key:'3',
    img: require('./Images/img2.jpg'),
    Name:'Google',
    mark:'80'
   },
   {
    key:'4',
    img: require('./Images/img3.jpg'),
    Name:'Google',
    mark:'80'
   },
   {
    key:'5',
    img: require('./Images/img4.jpg'),
    Name:'Google',
    mark:'80'
   },
   
   {
    key:'5',
    img: require('./Images/google1.png'),
    Name:'Google',
    mark:'80'
   },
   
   {
    key:'5',
    img: require('./Images/yuzi.png'),
    Name:'Google',
    mark:'80'
   },
   
   {
    key:'5',
    img: require('./Images/img2.jpg'),
    Name:'Google',
    mark:'80'
   },
   
   {
    key:'6',
    img: require('./Images/butler.png'),
    Name:'Google',
    mark:'80'
   },
   
];

export default function Flat({navigation}){
    return(


        
        <View>
            <FlatList 
            data={newArray}
            renderItem={({item})=>{
                return(
                   
                    <InstaStory Title={item.Name} Image={item.img}/>
                )
            }
        }
            />
        </View>
    )
}

const styles = StyleSheet.create({
   
})