import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextScheme from './TextScheme';
import {screenWidth} from '../utilis/screenSize';

export default function Allergens({data}) {
  return (
    <View style={styles().allergensContainer}>
      <TextScheme fontWeight="500" style={styles().allergensLabel}>
        allergens:
      </TextScheme>
      <TextScheme fontWeight="500">{data?.allergens.join(', ')}</TextScheme>
    </View>
  );
}

const styles = () =>
  StyleSheet.create({
    allergensContainer: {
      flex: 1,

      alignSelf: 'center',
      width: screenWidth - 40,
      marginVertical: 10,
      backgroundColor: '#F2F3F3',
      borderRadius: 4,
      paddingHorizontal: 5,
      paddingVertical: 5,
    },

    allergensLabel: {
      alignSelf: 'flex-start',

      borderRadius: 4,
      backgroundColor: '#E63228',
      color: 'white',
      overflow: 'hidden',

      paddingHorizontal: 5,
      paddingVertical: 2,
      marginBottom: 5,
    },
  });
