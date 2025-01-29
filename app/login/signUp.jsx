import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'
import {auth} from './../../Configs/FireBaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default function SignUp() {
        const router = useRouter() ; 
        const[email , setEmail ]= useState();
        const[password , setPassword ]= useState();
        const [userName , setUserName]= useState()
    const OnCreateAccount = ()=>{
        if(!email || !password || !userName)
        {
        /*this for Android */ 
        ToastAndroid.show("Please fill all details !" , ToastAndroid.BOTTOM) 
        /*This is for IOS */       
        Alert.alert("Please fill all details !");
        return; /* So it doesnt go to the next ligne  */
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // onece the account successfully created we will be routed to the home screen called tabs 
            await updateProfile(user ,{displayName : userName} )
             await setLocalStorage('userDetail' , user )
            router.push('(tabs)')
            // ...

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            if(errorCode=='auth/email-already-in-use')
            {
                ToastAndroid.show("Email already existe" , ToastAndroid.BOTTOM)
                Alert.alert("Email already exists !")
            }
            // ..
        });
    }
  return (
     <View style={{
            padding:25
        }}>
            <Text style={styles.textHeader}>Create New Account </Text>
            <View style={{marginTop:25}}>
                <Text>Full Name</Text>
                <TextInput onChangeText={(value)=>setUserName(value)} style={styles.textInput} placeholder='Full Name'/>
            </View>
            <View style={{marginTop:25}}>
                <Text>Email</Text>
                <TextInput onChangeText={(value)=>setEmail(value)} style={styles.textInput} placeholder='Email ... '/>
            </View>
            <View style={{marginTop:25}}>
                <Text>Password</Text>
                <TextInput onChangeText={(value)=>setPassword(value)} style={styles.textInput} placeholder='Password ...' secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.button} 
            onPress={OnCreateAccount}>
                <Text style={{
                    fontSize:17, 
                    color:'white', 
                    textAlign:'center'
                }}>Create Account </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> router.push('login/signin')}  style={styles.buttonCreate}>
                <Text style={{
                    fontSize:17, 
                    color:Colors.PRIMARY, 
                    textAlign:'center'
                }}>Already account ? Sign in </Text>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    textHeader:{
        fontSize:30, 
        fontWeight:'bold', 
        marginTop:50
    }, 
    subText:{
        fontSize:30, 
        fontWeight:'bold', 
        marginTop: 10 , 
        color: Colors.GRAY
    }, 
    textInput:{
        padding: 10 , 
        borderWidth:1 , 
        fontSize:17 , 
        borderRadius:10 , 
        marginTop:5 , 
        backgroundColor:'white'

    },
    button:{
        padding:15 , 
        backgroundColor: Colors.PRIMARY, 
        borderRadius: 15 , 
        marginTop:30
    }
, 
buttonCreate:{
    padding:15 , 
    backgroundColor: 'white', 
    borderRadius: 15 , 
    marginTop:30 , 
    borderWidth:1,
    borderColor: Colors.PRIMARY
}

})