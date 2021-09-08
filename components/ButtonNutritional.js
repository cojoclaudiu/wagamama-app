import React from 'react';
import {TouchableWithoutFeedback, Text, StyleSheet, View} from 'react-native';
import {nativeIos} from '../utilis/appColors';

export default function ButtonNutritional({title, nutrition, selected}) {
  return (
    <TouchableWithoutFeedback onPress={nutrition}>
      <View style={styles(selected).button}>
        <Text style={styles(selected).textButton}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = selected =>
  StyleSheet.create({
    button: {
      backgroundColor: selected ? nativeIos : 'transparent',
      borderColor: nativeIos,
      borderWidth: 1,
      borderRadius: 5,
      alignSelf: 'center',
      padding: 10,
      margin: 5,
    },

    textButton: {
      fontSize: 16,
      color: !selected ? nativeIos : 'white',
    },
  });
