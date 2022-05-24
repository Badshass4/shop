import React, {useState} from 'react';
import { Modal, View, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './Product.style';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';

const Product = () => {
  const { selectedCategory, categoryDetails } = useSelector((state) => state.homeReducer);
  const COLORS = ['lightblue', 'white'];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const onItemPress = (name) => {
    setSelectedItem(name);
    setModalVisible(!modalVisible);
  }
  const renderItem = ({item, index}) => {
    return (
        <Card
            name={item.name}
            index={index}
            onPress={onItemPress}
        ></Card>
    );
  };
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>List of {selectedCategory} :</Text>
        <FlatList
            data={categoryDetails}
            renderItem={renderItem}
            keyExtractor={( item ) => item.product_url}
            ListEmptyComponent={<Text style={{color: 'red'}}>No items available!</Text>}
            ListFooterComponent={<View style={{ marginBottom: 40 }} />        }
        ></FlatList>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>You have selected {selectedItem}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default Product;