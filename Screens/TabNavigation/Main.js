import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity,StyleSheet,themeColorcontext } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import One from './One';
import Two from './Two';
import Three from './Three';
const Tab = createBottomTabNavigator();

export default function Main() {
  return (
   
      <Tab.Navigator 
      screenOptions={{headerShown:false, tabBarShowLabel:false,tabBarStyle:{position:'absolute',elevation:0,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius:10,  shadowColor: 'light' ? 'rgba(0,0,0,1.90)' : 'rgba(255,255,255,0.90)',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 20,  
      elevation: 10,},
      tabBarActiveTintColor:'purple',

     }} >
        <Tab.Screen name="One" component={One} 
        options={{
          tabBarIcon:({focused,color})=>(
             
                 <Feather name='home' size={30} color={color} /> 
              
          ),}}
        />
        <Tab.Screen name="Two" component={Two} 
        options={{
          tabBarIcon:({focused,color})=>(
             
                 <Feather name='search' size={30} color={color} /> 
              
          ),}} />
        <Tab.Screen name="Three" component={Three}
        options={{
          tabBarIcon:({focused,color})=>(
             
                 <Feather style={styles.set} name='settings' size={30} color={color} /> 
              
          ),}} />
      </Tab.Navigator>
   
  );
}

const styles = StyleSheet.create({
  set:{
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#9C6DFF',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
    
  }
})