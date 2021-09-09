import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import TextScheme from './TextScheme';
import {nativeIos} from '../utilis/appColors';

export default function ButtonNutritional({title, nutrition, selected}) {
  return (
    <TouchableWithoutFeedback onPress={nutrition}>
      <View style={styles(selected, useColorScheme()).button}>
        <TextScheme style={styles(selected, useColorScheme()).textButton}>
          {title}
        </TextScheme>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = (selected, colorScheme) =>
  StyleSheet.create({
    button: {
      backgroundColor: selected ? nativeIos[colorScheme] : 'transparent',
      borderColor: nativeIos[colorScheme],
      borderWidth: 1,
      borderRadius: 5,
      alignSelf: 'center',
      padding: 10,
      margin: 5,
    },

    textButton: {
      fontSize: 16,
      color: !selected ? nativeIos[colorScheme] : 'white',
      fontWeight: selected ? '500' : 'normal',
    },
  });
