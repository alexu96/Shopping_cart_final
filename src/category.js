import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, ActivityIndicator,Alert,TextInput } from "react-native";
import { useSelector, connect } from 'react-redux';
import { Category } from '../actions/items';
import { Rating } from 'react-native-ratings';
import Icons from 'react-native-vector-icons/FontAwesome';

const category = ({ route, Category,navigation }) => {

  const shop = useSelector(state => state.Item.shops)

  const [items,setitems]=useState(null)

  const [value, setvalue] = useState(true)

  const [state, setstate] = useState({
    high: false,
    low: false
  })

  useEffect(() => {
    setTimeout(() => {
      setvalue(false)
    
    }, 2000)
  }, [])

  useEffect(()=>{
    if((state.high&&state.low)){
      Alert.alert("Choose anyone filter option")
      setstate({
        ...state,
        high:false,
        low:false
      })
    }
    
  },[state.high,state.low])



  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      {
        value ? (


          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>

        ) :
          (
            <View  style={{ alignItems: 'center', justifyContent: 'center' }}>

              <View style={{ width: Dimensions.get('window').width, height: 40, borderRadius: 1, backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Icons name='filter' size={20} color='grey' />
                <Text style={{ fontSize: 15, marginRight: '5%', marginLeft: 5 }}>Filter</Text>
                <TouchableOpacity
                  style={[styles.button,{backgroundColor:state.high ? "#D3D3D3" : "#fff"}]}
                  onPress={()=>{
                    setstate({
                      ...state,
                      high:!state.high
                    })
                    shop.sort((a, b) => (b.price - a.price))
                  }}
                >
                  <Text style={{ fontSize: 12 }}>PRICE HIGH TO LOW</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button,{backgroundColor:state.low ? "#D3D3D3" : "#fff"}]}
                  onPress={()=>{
                    setstate({
                      ...state,
                      low:!state.low
                    })
                    shop.sort((a, b) => (a.price - b.price))
                  }}
                >
                  <Text style={{ fontSize: 12 }}>PRICE LOW TO HIGH</Text>
                </TouchableOpacity>

              </View>
             
              <FlatList
                data={shop}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate("Details",{
                    Selected:item
                  }) } 
                  >
                    <View style={styles.style}>
                      <Image source={{ uri: item.image }} style={styles.image} resizeMode={'contain'} />
                      <Text style={{ fontWeight: 'bold', color: 'grey', margin: 5 }}>{item.name}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 5 }}>
                        <Rating
                          type='star'
                          ratingCount={5}
                          imageSize={18}
                          onFinishRating={() => { }}
                          startingValue={item.rating}
                        />
                        <Text style={{ color: 'lightskyblue', fontSize: 15, marginLeft: 10 }}>({item.count})</Text>
                      </View>
                      <Text style={{ color: 'brown' }}>Rs {item.price}</Text>
                    </View>

                  </TouchableOpacity >
                )}
                keyExtractor={item => item._id}
              />
              </View>
           

          )
      }


    </View>
  )
}

export default category;

const styles = StyleSheet.create({

  image: {
    width: '100%',
    height: '60%',

  },
  style: {
    width: Dimensions.get('window').width / 2.2,
    height: Dimensions.get('window').height / 2.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    borderColor:'#D3D3D3',
    justifyContent: 'center',

  },
  input: {
    width:200,
    borderBottomColor:'red',
    borderBottomWidth:1,
},

})
