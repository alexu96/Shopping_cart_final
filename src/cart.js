import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useSelector, connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import NumericInput from 'react-native-numeric-input'
import { AddCart, RemoveCart, Total, ResetCart} from '../actions/cart';

const cart = ({ AddCart, RemoveCart, Total,navigation , ResetCart}) => {


    const Cart = useSelector(state => state.Cart.CartItems)
    const value = useSelector(state => state.Cart.Total)
    console.log(value)
    const [cart, setcart] = useState({
        access: false,
        Qty: 0,
        _id: 0,
        image: '',
        name: '',
        price: '',

    })

    useEffect(() => {
        if (cart.access) {
            AddCart({ cart })
            setcart({
                ...cart,
                access: false
            })
        }
    }, [cart.access])






    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {
                Cart !== null ? (
                    <View>
                        <FlatList
                            data={Cart}
                            renderItem={({ item }) => (
                                <View style={styles.outer}>
                                    <Image source={{ uri: item.image }} style={{ width: '20%', height: '100%' }} resizeMode={'contain'} />
                                    <NumericInput
                                        onChange={(value) => {
                                            setcart({
                                                ...cart,
                                                Qty: value,
                                                _id: item._id,
                                                image: item.image,
                                                name: item.name,
                                                price: item.price,
                                                access: true
                                            })
                                        }}
                                        minValue={1}
                                        maxValue={5}
                                        value={item.Qty}
                                        totalWidth={80}
                                        totalHeight={35}
                                        onLimitReached={() => { }}
                                        step={1} />
                                    <Text style={styles.text}>Rs {item.price * item.Qty}</Text>
                                    <Icon.Button name='delete' size={20} color='red' backgroundColor='#fff' onPress={() => {
                                        const { _id } = item
                                        RemoveCart({ _id })
                                        Alert.alert("product removed")

                                    }}
                                    />

                                </View>

                            )}
                            keyExtractor={(item) => item._id}

                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                               
                                
                                Total({ total:Cart
                                    .reduce((value, item) => value + item.Qty * item.price, 0) })
                                navigation.navigate("shipping")
                                
                            }}
                        >
                            <Text style={{ color: '#fff' }}>PAY  Rs {Cart
                                .reduce((value, item) => value + item.Qty * item.price, 0)}</Text>
                        </TouchableOpacity></View>

                ) : <Text>no cart items</Text>
            }


        </View>
    )
}

export default connect(null, { AddCart, RemoveCart, Total, ResetCart })(cart);

const styles = StyleSheet.create({
    outer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 80,
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
