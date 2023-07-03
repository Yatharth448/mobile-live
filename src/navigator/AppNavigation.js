import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/Login/LoginScreen'
import HomeScreen from '../screen/Home/HomeScreen';
import DateTime from '../screen/DateTime/DateTime';
import UserDetailScreen from '../screen/UserDetail/UserDetailScreen';
import MyDrawer from './BottomNav';



const Stack = createNativeStackNavigator()


export default function AppNavigation() {

    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' />
            <Stack.Navigator screenOptions={{ headerShown: false }} >

                {/* <Stack.Screen name="ProductChooser" component={ProductChooser} options={{ animationEnabled: false }}/> */}
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />
                <Stack.Screen name="DateTime" component={DateTime} />
                <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
                

               
            </Stack.Navigator>

        </NavigationContainer>
    )
}
