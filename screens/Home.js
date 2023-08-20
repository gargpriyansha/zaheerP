import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";
export default class HomeScreen extends react.native{


render(){
    return(
        <View>
    

<TouchableOpacity
 style={[styles.button,{backroundColor:green}]}
onPress={()=> this.goToHomeScreen("green")}>
<Text styles = {styles.buttonText}></Text>
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button,{backroundColor:green}]}
onPress={()=> this.goToA10cockpitScreen("blue")}>
<Text styles = {styles.buttonText}></Text>
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button,{backroundColor:green}]}
onPress={()=> this.goToA10gunScreen("red")}>
<Text styles = {styles.buttonText}></Text>
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button,{backroundColor:green}]}
onPress={()=> this.goToA10wingsScreen("yellow")}>
<Text styles = {styles.buttonText}></Text>
</TouchableOpacity>


</View>
    )
    
    }
}




const styles = StyleSheet.create({
    button:{
      justifyContent : 'center',
      alignSelf : 'center',
      borderWidth : 2,
      borderRadius : 15,
      marginTop:50,
      width : 200,
      height:50,
    },
    buttonText : {
      textAlign : 'center',
      color : 'white'
    }
  })
