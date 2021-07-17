import React, { useState, useEffect } from "react";
import {connect, useSelector} from 'react-redux'
import {  Button, StyleSheet, TextInput, View,Text,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Register } from "../actions/login"



const register = ({navigation,Register}) => {

  const value=useSelector(state=>state.login.isAuthentication)

  const [text, setText] = useState({
    name:"",
    email : "",
    password: "",
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setText({
        ...text,
        secureTextEntry: !text.secureTextEntry
    })
}

  const {name,email,password}=text
  
  useEffect(()=>{

    if(value){
      navigation.navigate("home")
    }
  
  },[value])


  return (
    <View style={styles.container}>
<Text style={styles.text}>Create your account,</Text>
<Text style={[styles.text,{fontSize:18,fontWeight:'normal'}]}>SignUp to continue</Text>

      <View style={styles.inner}>
      <Icon name='account' size={25} color='grey'/>
      <TextInput
                        placeholder="Your name"
                        style={styles.textInput}
                        onChangeText={(event)=>{
                          setText({
                            ...text,
                            name:event
                          })
                        }}
                        style={{margin:10}}
                        
                    />
        
      </View>
      <View style={styles.inner}>
      <Icon name='email' size={25} color='grey'/>
      <TextInput
                        placeholder="Your email"
                        style={styles.textInput}
                        onChangeText={(event)=>{
                          setText({
                            ...text,
                            email:event
                          })
                        }}
                        style={{margin:10}}
                        
                    />
        
      </View>
      <View style={styles.inner}>
      <Icon name='lock' size={25} color='grey'/>
      <TextInput
                        placeholder=" enter password"
                        style={styles.textInput}
                        onChangeText={(event)=>{
                          setText({
                            ...text,
                            password:event
                          })
                        }}
                        secureTextEntry={text.secureTextEntry ? true : false}
                        style={{margin:10}}
                        
                    />
                     <TouchableOpacity
                        onPress={updateSecureTextEntry}
                        style={{marginLeft:'30%'}}

                    >
                        {text.secureTextEntry ?
                            <Icon
                                name="eye-off"
                                color='grey'
                                size={18}
                            />:
                            <Icon
                                name="eye"
                                color='grey'
                                size={18}
                            />}
                    </TouchableOpacity>

        
      </View>
      <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>{ Register({name,email,password})}}
                                >
                                    <Text style={{ color: '#fff' }}>SignUp</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.button,{backgroundColor:'#fff',width:'100%'}]}
                                    onPress={()=>{navigation.navigate('login')}}
                                >
                                    <Text style={{ color: 'grey' }}>Already have account? LOGIN NOW</Text>
                                </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
   
    marginTop:10,
    paddingLeft: 10,
    color: 'grey',
},
text:{
  justifyContent:'flex-start',
  fontSize:20,
  color:'grey',
  marginLeft:20,
  alignSelf:'flex-start',
  fontWeight:'bold',
  marginBottom:10
},
inner:{
  alignItems:'center',
  justifyContent:'flex-start',
  flexDirection:'row',
  borderBottomWidth:1,
  width:'80%',
  marginTop:'5%',
  marginBottom:10
},
button: {
  alignItems: "center",
  backgroundColor: "#213970",
  padding: 15,
  height: 40,
  marginTop:15,
  marginBottom:10,
  borderRadius: 10,
  width:'45%',
  justifyContent: 'center'
},

});

export default connect(null,{Register})(register);