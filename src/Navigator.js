import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Feed'
                screenOptions={{
                    tabBarShowLabel: false,
                    //tabBarActiveTintColor: '#008',
                    //tabBarInactiveTintColor: '#008000',
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
                    component={Profile} 
                    options={() => ({
                        tabBarIcon: ({ color }) =>
                            <Icon name='user' size={30} color={color} />
                    })}           
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}