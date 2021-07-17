import React from "react";
import {DrawerContentScrollView, DrawerItemList,DrawerItem, } from "@react-navigation/drawer";
import {Text,View,NativeModules} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Reset } from '../actions/login';


const Sidebar=(props)=>{
    return(
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor:'steelblue',marginBottom:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center',margin:30,color:'#fff'}}>Hello, Welcome back!</Text>
            </View>
            <DrawerItemList {...props} />
            <View style={{marginTop:'20%'}}>
                <View style={{borderColor:'lightgray',borderBottomWidth:1}}/>
            <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="back" 
                        color='steelblue'
                        size={30}
                        />
                    )}
                    label="Sign Out"
                    inactiveTintColor="steelblue"
                    labelStyle={{fontWeight:'bold',fontSize:17}}
                    onPress={() => {
                        NativeModules.DevSettings.reload();
                    }}
                />
                 <View style={{borderColor:'lightgray',borderBottomWidth:1}}/>
               

            </View>

        </DrawerContentScrollView>
    )
}

export default Sidebar;