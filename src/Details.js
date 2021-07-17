import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, Dimensions, Button, TouchableOpacity, ScrollView,FlatList ,TextInput,Alert} from "react-native";
import { connect, useSelector } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { AddCart } from '../actions/cart';
import NumericInput from 'react-native-numeric-input';
import { Review,GetReview } from '../actions/review';





const Details = ({ route, AddCart ,Review,GetReview,navigation}) => {

    const value=useSelector(state=>state.review.reviews)
    


const { Selected } = route.params;



    const [cart, setcart] = useState({
        Qty: 1,
        _id: Selected._id,
        image: Selected.image,
        name: Selected.name,
        price: Selected.price,
    

    })

    const [state,setstate]=useState({
        productId:Selected._id,
        rating:0,
        review1:'',
        reviews:null
    })
 



    useEffect(()=>{

        const productId=Selected._id;

        GetReview({productId})
        setstate({
...state,
reviews:value
        })
        

    },[value])





    return (
        <ScrollView>

            { Selected != null ? (
                <View style={styles.container}>

                    <Image source={{ uri: Selected.image }} style={styles.image} resizeMode={'contain'} />

                    <Text style={{ color: 'grey' }}>{Selected.description}</Text>

                    <Text style={styles.text}>{Selected.name}</Text>
                    <Text style={styles.text1}> Rs {Selected.price}</Text>



                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', margin: 20 }}>
                        
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                
                                    AddCart({ cart })
                                    Alert.alert('Added to Cart')
                                    navigation.navigate("home")
                                
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[styles.text, { fontSize: 17, marginBottom: 15, color: 'grey' }]}>CUSTOMER REVIEWS</Text>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={23}
                           
                            readonly={true}
                            startingValue={Selected.rating}
                        />
                        <Text style={[styles.text1, { color: 'grey',marginTop:10,marginBottom:10 }]}>{Selected.count} Global ratings</Text>
                       
                        
                        {
                            state.reviews !==null ? (
 
                                state.reviews.map((x,index)=>(
                                    <View style={{margin:10}} key={index}>
                                          
                                    <Text style={{margin:10,fontWeight:'bold'}}>{x.name}</Text>
                                    <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={20}
                            style={{alignSelf:'flex-start'}}
                            readonly={true}
                            startingValue={x.rating}
                        />
                                    <Text style={{margin:5}}>{x.review1}</Text>
                                    </View>
                                ))
                            ):null
                                
                        }
                        
                        
                        
                    </View>
                  
                    
                    <Text style={[styles.text, { color: 'grey' ,alignSelf:'flex-start',margin:10,marginTop:20,marginBottom:20}]}>WRITE YOUR REVIEW</Text>
                    <Rating
                            type='star'
                            jumpValue={1}
                            ratingCount={5}
                            imageSize={30}
                            onFinishRating={(event)=>{
                                setstate({
                                    ...state,
                                    rating:event
                                })
                            }}
                            startingValue={0}
                        />
                    
                    <TextInput
            style={styles.input}
            onChangeText={(event)=>{
                   setstate({
                       ...state,
                       review1:event
                   })
            }}
            placeholder=" Your Comments....."
            multiline={true}
            numberOfLines={4}
    />
                    

<TouchableOpacity
                            style={[styles.button,{margin:20,width:'85%',backgroundColor:'grey'}]}
                            onPress={()=>{
                                const { productId,rating,review1}=state
                                Review({productId,rating,review1})
                                navigation.navigate("category")
                             
                            
                            }}
                           
                        >
                            <Text style={{ color: '#fff' }}>Write your Review</Text>
                        </TouchableOpacity>

    

                    












                </View>

            ) : null}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: 200,
        flex: 1,
        margin: 20
    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'brown',
    },
    button: {
        alignItems: "center",
        backgroundColor: "crimson",
        padding: 15,
        height: 45,

       width:'50%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    container: {
        backgroundColor: "#fff",
        alignItems: 'center',

        justifyContent: 'center',
    },
    review:{
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
        fontSize:15
    },
    input: {
        width:'80%',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        alignSelf:'flex-start',
        marginLeft:15
    },
})


export default connect(null, { AddCart,Review,GetReview })(Details);