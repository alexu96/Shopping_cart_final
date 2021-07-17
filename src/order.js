import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useSelector,connect } from 'react-redux';

import { Order} from '../actions/order';

const order = ({ Order }) => {

    
    const values = useSelector(state => state.order.order)
  

    useEffect(()=>{
        Order()
    })



    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {
                values !== null ? (
                    
                        <FlatList
                            data={values}
                            renderItem={({ item }) => (
                               item.Items.map((x,index)=>(
                                <View style={styles.outer} key={index}>
                                <Image source={{ uri: x.image }} style={{ width: '30%', height: '100%' }} resizeMode={'contain'} />
                                <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                <Text style={styles.text}>{x.name}</Text>
                                <Text style={[styles.text,{alignSelf:'flex-start',fontSize:13,color:'black',fontWeight:'normal'}]}>Qty: {x.Qty}</Text>
                                </View >
                                <Text style={[styles.text,{margin:20,color:'brown'}]}>Rs {x.price * x.Qty}</Text>

                               

                            </View>

                               ))

                            )}
                            keyExtractor={(item) => item._id}

                        />
                       

                ) : <Text>You have no orders</Text>
            }


        </View>
    )
}

export default connect(null, { Order})(order);

const styles = StyleSheet.create({
    outer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 90,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        marginTop: 10,
        borderRadius: 10



    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',


    },
    image: {
        width: '100%',
        height: '90%',
        flex: 3



    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'grey',

    },
    button: {
        alignItems: "center",
        backgroundColor: "crimson",
        padding: 10,
        height: 45,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center'
    }


})
