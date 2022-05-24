import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/HomeScreen/Home';
import Product from '../screens/ProductScreen/Product';
import { useSelector } from 'react-redux';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  const {selectedCategory } = useSelector((state) => state.homeReducer);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Products"
        component={Product}
        options={{ headerShown: true, headerTitle: selectedCategory }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator