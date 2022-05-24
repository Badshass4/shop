import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Card.style';

const Card = (props) => {
  const COLORS = ['lightblue', 'white'];
  return (
    <TouchableOpacity onPress={() => props.onPress(props.name)}>
        <View style={{...styles.categoryView,  backgroundColor: COLORS[props.index%2]}}>
            <Text style={styles.categoryName}>{props.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Card;