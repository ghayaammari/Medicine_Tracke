import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Tabs, useRouter } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Configs/FireBaseConfig';
import { getLocalStorage } from '../../Service/Storage';

export default function TabLayout() {
  const router = useRouter()
  useEffect(()=>{
    GetUserDetail();
  },[]) 
  // use effect without params means when the page 
  const GetUserDetail = async ()=> {
    const userInfo = await getLocalStorage('userDetail');
    if(!userInfo){
      router.replace('/login')
    }
  }

  // if user is logged in 
  /*
    const [authenticated , setAuthenticated ]= useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      setAuthenticated(true)
      // ...
    } else {
      // router.push('/login')
      setAuthenticated(false)

      // User is signed out
      // ...
    }
  });
  useEffect(()=>{
    if(authenticated==false){
      router.push('/login')
    }

  }, [authenticated])*/
  return (
    <Tabs screenOptions={{
      headerShown:false
    }}>
      <Tabs.Screen name ="index" 
       options={{
       tabBarLabel:'Home' ,
       tabBarIcon :({color, size})=> (<FontAwesome name="home" size={24} color={color} />)
      }} />
      <Tabs.Screen name="AddNew"
        options={{
        tabBarLabel:'Add New ' ,
        tabBarIcon :({color, size})=> (<FontAwesome name="plus-square" size={24} color={color} />)
       }}/>
      <Tabs.Screen name='Profile'
       options={{
        tabBarLabel:'Profile' ,
        tabBarIcon :({color, size})=> (<FontAwesome name="user" size={24} color={color} />)
       }}/>
    </Tabs>
  )
}