import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './HomeNavigator';
import Settings from '../screens/SettingsScreen/Settings';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          // options={{
          //   tabBarLabel: 'Home',
          //   tabBarIcon: ({ color }) => (
          //     <MaterialCommunityIcons name="home" color={color} size={26} />
          //   ),
          // }}  
        />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;