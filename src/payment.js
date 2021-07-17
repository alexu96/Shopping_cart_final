import React, { useEffect, useState } from "react";
import { View,Text,Image,TouchableOpacity,StyleSheet,Alert,TextInput} from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Fontisto";
import Icons1 from "react-native-vector-icons/MaterialCommunityIcons";
import { Payment } from "../actions/payment";
import {connect,useSelector} from "react-redux";
import {ResetCart} from '../actions/cart'




const payment=({Payment,navigation,route,ResetCart})=>{

    const status=useSelector(state=>state.payment.payment_status)
    const user=useSelector(state=>state.login.User)
    const Item=useSelector(state=>state.Cart)
   

    const { detail } = route.params;

  const [details,setdetails]=useState({
      card:0,
      month:0,
      year:0,
      cvc:0,
      name:'',
      access:false
  })

useEffect(()=>{
    if(status==="success" && details.access){
        Alert.alert("Payment successful")
        navigation.navigate("home")
        setdetails({
            ...details,
            access:false, 
        })
        ResetCart()
       
    }
    
},[status,details.access])


   const handlepress=()=>{

    const { card,month,year,cvc,name }=details;

    fetch(`https://api.stripe.com/v1/tokens?card[number]=${card}&card[exp_month]=${month}&card[exp_year]=${year}&card[cvc]=${cvc}&amount=1&currency=inr`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer sk_test_51HigYKDDrnxmeYKAcm6ej65CSdWdRgCEwfjfdPDe3JqBTVkNYGmFRfVHZAnUEEB6YDwfFHeeqifvhUG9zY75QYTB00lkvTO0w2"
        }
      })
        .then(resp => resp.json())
          .then(res => {
            // HERE WE HAVE ACCESS TO THE TOKEN TO SEND IT TO OUR SERVERS
            // ALONG WITH INSENSITIVE DATA 
            const data=res.id;
            const Items=Item.CartItems
            const Total=Item.Total
            const {name,phone,address}=detail
            Payment({data,Items,Total,name,phone,address});    
      })


setdetails({
    ...details,
    access:true
})

Alert.alert("It might take few minutes wait for a while")

     

   }

    return(
        <View style={styles.container}>
            <Image source={{uri: 'https://library.kissclipart.com/20180827/quw/kissclipart-credit-cards-vector-clipart-credit-card-clip-art-9760c8f205a5f819.png'}}
            style={{width:200,height:180,marginBottom:30}}
        />
        <View style={styles.box}>
        <View style={styles.textinput}>
            <View style={{marginLeft:10}}>
            <Icons name="credit-card" size={20} color="grey" />
            </View>
    <TextInput
    placeholder='CardNo'
    style={{marginLeft:10}}
    onChangeText={(event)=>{
        setdetails({
            ...details,
            card:event
        })
    }}
    />
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={styles.textinput1}>
        <View style={{marginLeft:10}}>
            <Icon name="date" size={18} color="grey" />
            </View>
    <TextInput
    placeholder='Expire Month'
    style={{marginLeft:5}}
    onChangeText={(event)=>{
        setdetails({
            ...details,
            month:event
        })
    }}
    />
    </View>
    <View style={styles.textinput1}>
    <View style={{marginLeft:10}}>
            <Icon name="date" size={18} color="grey" />
            </View>
    <TextInput
    placeholder='Expire Year'
    style={{marginLeft:5}}
    onChangeText={(event)=>{
        setdetails({
            ...details,
            year:event
        })
    }}
    />
    </View>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={styles.textinput2}>
        <View style={{marginLeft:10}}>
            <Icons1 name="account-circle" size={25} color="grey" />
            </View>
    <TextInput
    placeholder='holder Name'
    style={{marginLeft:5}}
    onChangeText={(event)=>{
        setdetails({
            ...details,
            name:event
        })
    }}
    />
    </View>
    <View style={styles.textinput3}>
    <TextInput
    placeholder='CVC'
    style={{marginLeft:5}}
    onChangeText={(event)=>{
        setdetails({
            ...details,
            cvc:event
        })
    }}
    />
    </View>
        </View>
    
        </View>
       

        <TouchableOpacity
                    onPress={handlepress}
                    style={{width:170,height:45,borderRadius:10,justifyContent:'center',alignItems:"center",backgroundColor:"#66cdaa",marginTop:20,marginLeft:10}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Confirm Payment</Text>
                </TouchableOpacity>
        </View>
    )
}

export default connect(null,{Payment,ResetCart})(payment);

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        borderRadius:15,
        width:'90%',
        height:200,
        borderWidth:1,
        borderColor:'#add8e6',
        alignItems:'center',
        justifyContent:'center'
    },
    textinput:{
        borderRadius:10,     
        height:40,
        width:'90%',
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'grey',
        marginBottom:15,
        alignItems:'center',
        flexDirection:'row',
    },
    textinput1:{
        borderRadius:10,     
        height:40,
        width:'43%',
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'grey',
        alignItems:'center',
        flexDirection:'row',
        marginRight:5,
        marginLeft:5,
        marginTop:7.5,
        marginBottom:7.5
    },
    textinput2:{
        borderRadius:10,     
        height:40,
        width:'60%',
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'grey',
        alignItems:'center',
        flexDirection:'row',
        marginRight:5,
        marginLeft:5,
        marginTop:7.5,
        marginBottom:7.5
    },
    textinput3:{
        borderRadius:10,     
        height:40,
        width:'26%',
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'grey',
        alignItems:'center',
        flexDirection:'row',
        marginRight:5,
        marginLeft:5,
        marginTop:7.5,
        marginBottom:7.5
    }
})