import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { auth } from '../../Configs/FireBaseConfig'
import { signOut } from 'firebase/auth'

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen index</Text>
      {/* <Redirect href={'login'}/> */}
      <Button title='Logout' onPress={()=>signOut(auth)}/>
    </View>
  )
}