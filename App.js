import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import home from './src/home';
import cart from './src/cart';
import Icon from 'react-native-vector-icons/Entypo';
import { LogBox } from 'react-native';
import { Provider } from "react-redux";
import store from "./store";
import Details from './src/Details';
import category from './src/category';
import register from './src/register';
import login from './src/login';
import shipping from './src/Shipping';
import payment from './src/payment';
import order from './src/order';
import Sidebar from './src/custom';



const Drawer = createDrawerNavigator();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();

const Homescreen=({navigation})=>(
  <Stack.Navigator initialRouteName="register" screenOptions={{
          headerStyle: {
            backgroundColor: '#213970',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
  }}>
      <Stack.Screen name="home" component={home} options={{title:'Shopping Cart',
       headerLeft:()=>(
         <Icon.Button name='menu' size={25} color='#fff' backgroundColor='#213970' onPress={()=>
           navigation.openDrawer()
         }/>

       )
    
    }}/>
    <Stack.Screen name="Details" component={Details}/>
    <Stack.Screen name="category" component={category} />
    <Stack.Screen name="register" component={register} options={{
      title:'Shopping Cart'
    }}/>
    <Stack.Screen name="login" component={login} options={{
      title:'Shopping Cart',
     
    }}/>
    <Stack.Screen name="cart" component={cart} options={{title:'Cart Items',
       headerLeft:()=>(
         <Icon.Button name='menu' size={25} color='#fff' backgroundColor='#213970' onPress={()=>
           navigation.openDrawer()
         }/>


       )
    
    }}/>
     <Stack.Screen name="shipping" component={shipping} options={{title:'Shipping Details',    
    }}/>
    <Stack.Screen name="payment" component={payment} />
    </Stack.Navigator>
)

const Cartscreen=({navigation})=>(
  <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#213970',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
  }}>
      <Stack.Screen name="cart" component={cart} options={{title:'Cart Items',
       headerLeft:()=>(
         <Icon.Button name='menu' size={25} color='#fff' backgroundColor='#213970' onPress={()=>
           navigation.openDrawer()
         }/>


       )
    
    }}/>
    
    <Stack.Screen name="shipping" component={shipping} options={{title:'Shipping Details',    
    }}/>
     <Stack.Screen name="payment" component={payment} />
    
    </Stack.Navigator>
)

const orderScreen=({navigation})=>(
  <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#213970',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
  }}>
      <Stack.Screen name="order" component={order} options={{title:'Your Orders',
       headerLeft:()=>(
         <Icon.Button name='menu' size={25} color='#fff' backgroundColor='#213970' onPress={()=>
           navigation.openDrawer()
         }/>


       )
    
    }}/>    
    </Stack.Navigator>
)





const App=()=>{

  

  return(
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><Sidebar {...props}/>}>
        <Drawer.Screen name="home" component={Homescreen} options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              size={size}
              color={focused ? 'cornflowerblue' : 'grey'}
            />
          )
        }}/>
        <Drawer.Screen name="Cart" component={Cartscreen} options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="shopping-cart"
              size={size}
              color={focused ? 'cornflowerblue' : 'grey'}
            />
          )
        }}/>
         <Drawer.Screen name="Orders" component={orderScreen} options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="shopping-bag"
              size={size}
              color={focused ? 'cornflowerblue' : 'grey'}
            />
          )
        }}/>
      </Drawer.Navigator>
      
    </NavigationContainer>
    </Provider>
  )
}


export default App;