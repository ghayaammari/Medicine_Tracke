import { View, Text, StyleSheet , Image,  TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
// import { Image } from 'react-native-web'

export default function LoginScreen() {
  return (
    <View>
      <View style={{
        display:'flex', 
        alignItems: 'center', 
        marginTop:40}}>
        <Image source={require('./../../assets/images/login.png')} style={styles?.image} />
      </View>
      <View style={{
        padding:25 , 
        backgroundColor:Colors.PRIMARY, 
        height:'100%'

      }}>
        <Text style={{
            fontSize:20, 
            fontWeight:"bold",
            color:"white", 
            textAlign:'center'
        }}
        > Stay on Track , Stay Healthy </Text>
        <Text 
            style={{
               color:'white',
               textAlign:'center', 
               fontSize:17, 
               marginTop:20 
            }}
        > Track your meds , take control of your health . Stay consistents , stay confident</Text>
      <TouchableOpacity style={styles?.button}>
        <Text style={{
            textAlign:'center', 
            fontSize:16, 
            color:Colors.PRIMARY
        }}>Continue </Text>
      </TouchableOpacity>
      <Text 
        style={{color:'white' , marginTop:6}}
      >Note : By clicking continue button , you will aggree to our terms and permission.</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{width: 210 , height : 450 , borderRadius : 23}, 
    button : {
        padding:5 , 
        backgroundColor:'white', 
        borderRadius:99, 
        marginTop:4
    }
})