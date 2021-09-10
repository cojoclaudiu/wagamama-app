import React from 'react';
import {StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import {screenWidth} from '../utilis/screenSize';
import * as Animatable from 'react-native-animatable';
import {allergensBackground, redWaga, textColor} from '../utilis/appColors';

export default function Allergens({data, colorScheme}) {
  return (
    <Animatable.View
      animation="slideInLeft"
      style={styles(colorScheme).allergensContainer}>
      <TextScheme fontWeight="500" style={styles(colorScheme).allergensLabel}>
        allergens
      </TextScheme>
      <TextScheme fontWeight="500">{data?.allergens.join(', ')}</TextScheme>
    </Animatable.View>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    allergensContainer: {
      flex: 1,

      alignSelf: 'center',
      width: screenWidth - 40,
      marginVertical: 10,
      backgroundColor: allergensBackground[colorScheme],
      borderRadius: 4,
      padding: 10,
    },

    allergensLabel: {
      alignSelf: 'flex-start',

      borderRadius: 4,
      borderColor: colorScheme === 'light' ? redWaga : 'transparent',
      borderWidth: colorScheme === 'light' ? 1 : 0,
      color: colorScheme === 'light' ? redWaga : textColor.light,
      backgroundColor: colorScheme === 'light' ? 'transparent' : redWaga,
      overflow: 'hidden',

      paddingHorizontal: 5,
      paddingVertical: 2,
      marginBottom: 5,
    },
  });
