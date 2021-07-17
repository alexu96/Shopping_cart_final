import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import { connect, useSelector } from "react-redux";
import { Items, Category } from '../actions/items';
import { Rating } from 'react-native-ratings';
import { SliderBox } from "react-native-image-slider-box";



const home = ({ Items, navigation, Category }) => {

    const Item = useSelector(state => state.Item);
    const [selected, setSelected] = useState({
        content:'',
        access:false
    })
    console.log(selected)


    const [item, setitem] = useState(null)

    useEffect(() => {

        Items()
        if (Item.value) {
            setitem(Item.items)
        }


    }, [Item.value])

    useEffect(() => {
        if(selected.access){
        
        const {content}=selected

        Category({ content })
        navigation.navigate('category')
        setSelected({
            ...selected,
            access:false
        })
        }
        


    }, [selected.access])

    const [image, setimage] = useState([
        'https://bsmedia.business-standard.com/_media/bs/img/article/2019-05/20/full/1558339151-4448.jpg',
        'https://img1.junaroad.com/assets/images/mobileNotif/1490703811159.jpg',
        'https://i.pinimg.com/originals/6f/df/35/6fdf35dc2413ab05ab449b1dd8b390bf.jpg'
    ])



    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center', flex: 1, marginTop: 5 }}>
                <View style={{ height: 170 }}>
                    <SliderBox images={image}
                        sliderBoxHeight={170}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        parentWidth={Dimensions.get('window').width}
                        resizeMode={'cover'}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        circleLoop
                    />
                </View>
                <Text style={{ alignSelf: 'flex-start', margin: 10, fontSize: 20, fontStyle: 'italic', color: 'grey' }}>Categories</Text>
                <View style={{ flexDirection: 'row' }}>
                    <ScrollView
                        horizontal={true}
                    >

                        <TouchableOpacity onPress={() => setSelected({
                            ...selected,
                            content:'Electronics',
                            access:true
                        })}>
                            <View style={styles.style}>
                                <Image source={{ uri: 'https://st.depositphotos.com/1000128/2454/i/600/depositphotos_24542943-stock-photo-mobile-devices-wireless-communication-technology.jpg' }} style={styles.image} resizeMode={'contain'} />
                                <Text>Electronics</Text>
                            </View>

                        </TouchableOpacity>
                       
                        <TouchableOpacity onPress={() => setSelected({
                            ...selected,
                            content:'Fashion',
                            access:true
                        })}>
                            <View style={styles.style}>
                                <Image source={{ uri: 'https://images.template.net/wp-content/uploads/2016/03/Male-and-Female-Fashion-Icons.jpg' }} style={styles.image} resizeMode={'contain'} />
                                <Text>Fashion</Text>
                            </View>

                        </TouchableOpacity >
                       
                        <TouchableOpacity onPress={() => setSelected({
                            ...selected,
                            content:'Meat',
                            access:true
                        })}>
                            <View style={styles.style}>
                                <Image source={{ uri: 'https://www.thehealthy.com/wp-content/uploads/2018/12/The-5-Best-Meats-to-Eat%E2%80%94and-2-to-Avoid-6.jpg' }} style={styles.image} resizeMode={'contain'} />
                                <Text>Meat</Text>
                            </View>

                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setSelected({
                            ...selected,
                            content:'Grocery',
                            access:true
                        })}>
                            <View style={styles.style}>
                                <Image source={{ uri: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-172382,resizemode-1,msid-75668135/industry/services/retail/grocery-sales-rise-fall-with-lockdown-fears/grocery-getty-f.jpg' }} style={styles.image} resizeMode={'contain'} />
                                <Text>Grocery</Text>
                            </View>

                        </TouchableOpacity>
                    </ScrollView>
                </View>


                <Text style={{ alignSelf: 'flex-start', margin: 15, fontSize: 20, fontStyle: 'italic', color: 'grey' }}>Popular Products</Text>




                {
                    item != null ? (

                        item.map((item, index) => (
                            <View style={styles.outer} key={index}>
                                <Image source={{ uri: item.image }} style={{ width: '40%', height: '80%', alignSelf: 'flex-start', justifyContent: 'center', marginTop: 10 }} resizeMode={'contain'} />
                                <View style={styles.inner}>
                                    <Text style={{ marginBottom: 5 }}>{item.name}</Text>
                                    <Rating
                                        type='star'
                                        ratingCount={5}
                                        imageSize={18}
                                        onFinishRating={() => { }}
                                        startingValue={item.rating}
                                    />
                                    <Text style={styles.text}>Rs {item.price}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>{navigation.navigate("Details",{
                                        Selected:item
                                    })}}
                                >
                                    <Text style={{ color: '#fff' }}>Add To Cart</Text>
                                </TouchableOpacity>
                            </View>

                        ))
                    ) : (
                        <Text>home screen</Text>
                    )
                }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    outer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 140,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 1,
        borderColor: 'grey',
        borderBottomWidth: 1


    },
    container: {
        backgroundColor: "#fff"
    },
    inner: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',






    },
    button: {
        alignItems: "center",
        backgroundColor: "crimson",
        padding: 10,
        height: 45,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '70%',
    },
    text: {
        fontSize: 15,


        alignSelf: 'center',
        color: 'grey',
        marginTop: 5
    },
    style: {
        width: 100,
        height: 120,
        borderRadius: 10,
        borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', margin: 10
    }

})

export default connect(null, { Items, Category })(home);
