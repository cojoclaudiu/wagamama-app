import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {greenWaga, redWaga} from '../utilis/appColors';
import Icon from 'react-native-ionicons';
import * as Animatable from 'react-native-animatable';

export default function HalfScreenButton({
  name,
  navigation,
  destination,
  position,
  color,
}) {
  position = position.replace(/^./, str => str.toUpperCase());
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(destination)}>
      <Animatable.View
        animation={`fadeIn${position}`}
        style={styles(position, color).buttonContainer}>
        <View style={styles(position, color).textContainer}>
          <Text style={styles(position, color).textButton}>{name}</Text>
          <Icon
            name={
              (destination === 'Order' && 'list') ||
              (destination === 'Favorite' && 'heart')
            }
            size={20}
            color="white"
          />
        </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

const styles = (position, color) =>
  StyleSheet.create({
    buttonContainer: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
      [`borderTop${position}Radius`]: 5,
      [`borderBottom${position}Radius`]: 5,
      backgroundColor:
        (color === 'red' && redWaga) ||
        (color === 'green' && greenWaga) ||
        'transparent',
    },

    textContainer: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },

    textButton: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      paddingLeft: 5,
      marginBottom: 1.5,
    },
  });
