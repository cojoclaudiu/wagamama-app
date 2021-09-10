import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import priceFormat from '../utilis/priceFormat';

export default function Price({data}) {
  return (
    <View style={styles().priceContainer}>
      <TextScheme style={styles().priceLabel}>Price:</TextScheme>
      <TextScheme style={styles().priceValue}>
        {priceFormat(data?.price)}
      </TextScheme>
    </View>
  );
}

const styles = () =>
  StyleSheet.create({
    priceContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',

      marginTop: 5,
    },

    priceLabel: {
      borderRadius: 4,
      backgroundColor: '#53C351',
      fontWeight: '500',
      color: 'white',
      overflow: 'hidden',
      paddingHorizontal: 5,
      paddingVertical: 2,
    },

    priceValue: {
      fontWeight: '500',
      marginLeft: 5,
    },
  });
