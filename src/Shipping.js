import React,{useState} from "react";
import { Text,View,TextInput,TouchableOpacity, StyleSheet} from "react-native";

const shipping=({navigation})=>{

    const [state,setstate]=useState({
        name:'',
        phone:'',
        address:''
    })

    return(
        <View style={styles.container}>
             <TextInput
            style={styles.input}
            onChangeText={(event)=>{
                setstate({
                    ...state,
                    name:event
                })
                   
            }}
            placeholder="Name"
    />
    <TextInput
            style={styles.input}
            onChangeText={(event)=>{
                setstate({
                    ...state,
                    phone:event
                })
                   
            }}
            placeholder="Phone Number"
    />
    <TextInput
            style={styles.input}
            onChangeText={(event)=>{
                setstate({
                    ...state,
                    address:event
                })
                   
            }}
            placeholder="Delivery Address..."
            multiline={true}
            numberOfLines={5}
    />

<TouchableOpacity
                            style={styles.button}
                            onPress={()=>{
                                
                             navigation.navigate("payment",{
                                 detail:state
                             })
                            
                            }}
                           
                        >
                            <Text style={{ color: '#fff' }}>Proceed for Payment</Text>
                        </TouchableOpacity>

            
        </View>

    )
}

const styles = StyleSheet.create({

    input: {
        width:'80%',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        margin:20
     
    
       
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#fff'
    },
    button: {
        alignItems: "center",
        backgroundColor: "crimson",
        padding: 15,
        height: 45,
        margin:20,
        width:'60%',
        borderRadius: 10,
        justifyContent: 'center'
    },
})

export default shipping;