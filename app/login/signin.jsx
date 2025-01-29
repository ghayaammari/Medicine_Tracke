import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'
import{auth } from './../../Configs/FireBaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { setLocalStorage } from '../../Service/Storage'
export default function SignIn() {
    const router = useRouter() 
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    const onSingInClick = () => {
        if(!email || !password){
            Alert.alert("please enter email and password ! ");
            ToastAndroid.show("please enter email and password !" , ToastAndroid.BOTTOM);
            return;
        }
        signInWithEmailAndPassword(auth, email, password)

        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            await setLocalStorage('userDetail' , user );
            router.replace('(tabs)')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode=="auth/invalid-credential"){
                Alert.alert("Invalid email or password !")
                ToastAndroid.show("Invalid email or password !" , ToastAndroid.BOTTOM); 
            }
            console.log
        });
    }
  return (
    <View style={{
        padding:25
    }}>
        <Text style={styles.textHeader}>Let's Sign you in ! </Text>
        <Text  style={styles.subText}>Welcome Back</Text>
        <Text  style={styles.subText}>You've been missed!</Text>
        <View style={{marginTop:25}}>
            <Text>Email</Text>
            <TextInput onChangeText={(value)=> setEmail(value)} style={styles.textInput} placeholder='Email'/>
        </View>
        <View style={{marginTop:25}}>
            <Text>Password</Text>
            <TextInput onChangeText={(value)=> setPassword(value)} style={styles.textInput} placeholder='Password' secureTextEntry={true}/>
        </View>
        <TouchableOpacity onPress={onSingInClick} style={styles.button}>
            <Text style={{
                fontSize:17, 
                color:'white', 
                textAlign:'center'
            }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('login/signUp')}  style={styles.buttonCreate}>
            <Text style={{
                fontSize:17, 
                color:Colors.PRIMARY, 
                textAlign:'center'
            }}>Create Account </Text>
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