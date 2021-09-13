import React from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {redWaga} from '../utilis/appColors';

export default function CompleteOrderButton() {
  return (
    <TouchableWithoutFeedback>
      <Animatable.View animation="fadeInLeft" style={styles.buttonContainer}>
        <Text style={styles.buttonColor}>Complete your order</Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: redWaga,
    padding: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },

  buttonColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
