import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function LoginOrProfileRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
            initialRouteName='Feed'
            screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            }}
        >
        <Tab.Screen
            name='Feed' 
            component={Feed} 
            options={() => ({
                tabBarIcon: ({ color }) =>
                    <Icon name='home' size={30} color={color} />
        })}  
        />
        <Tab.Screen
            name='AddPhoto' 
            component={AddPhoto}
            options={() => ({
                tabBarIcon: ({ color }) =>
                    <Icon name='camera' size={30} color={color} />
            })}           
        />
        <Tab.Screen
            name='Profile' 
            component={LoginOrProfileRouter} 
            options={() => ({
                tabBarIcon: ({ color }) =>
                    <Icon name='user' size={30} color={color} />
            })}           
        />
        </Tab.Navigator>
    </NavigationContainer>
  );
}