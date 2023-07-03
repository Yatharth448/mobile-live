import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from '../screen/Home/HomeScreen';
import DrawerScreen from '../screen/Drawer/DrawerScreen';
import Feather from 'react-native-vector-icons/Feather'
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerScreen {...props}/>} screenOptions={{ headerShown: false }}>
      {/* <StatusBar barStyle='light-content' /> */}
     
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
      
    </Drawer.Navigator>
  );
}
export default MyDrawer;