import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { auth } from '../../Configs/FireBaseConfig'
import { signOut } from 'firebase/auth'
import { RemoveLocalStorage } from '../../Service/Storage'

export default function HomeScreen() {
  // me who made it 
  const fct= ()=>{
    RemoveLocalStorage()

  }
  return (
    <View>
      <Text>HomeScreen index</Text>
      {/* <Redirect href={'login'}/> */}
      <Button title='Logout' onPress={()=>signOut(auth)}/>
      {/* me the next line */}
      {/* <Button title='Logout' onPress={()=>fct()}/> */}

    </View>
  )
}