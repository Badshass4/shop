import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.style';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories, fetchCategoryDetails } from '../../state/actions/homeAction';
import Card from '../../components/Card';

const Home = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { categories } = useSelector((state) => state.homeReducer);
    useEffect(() => {
      dispatch(fetchAllCategories());
    },[]);
    
    const onCategoryPress = (name) => {
        dispatch(fetchCategoryDetails(name));
        navigation.navigate('Products');
    };
    const renderItem = ({item, index}) => {
        return (
            <Card
                name={item.name}
                index={index}
                onPress={onCategoryPress}
            ></Card>
        );
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.welcomeText}>Welcome to My Shop</Text>
            <Text style={styles.subText}>All product categories</Text>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={( item ) => item.name}
            ></FlatList>
        </View>
    );
}

export default Home;