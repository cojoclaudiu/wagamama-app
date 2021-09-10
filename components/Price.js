import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import priceFormat from '../utilis/priceFormat';
import {greenWaga, textColor} from '../utilis/appColors';

export default function Price({data, colorScheme}) {
  return (
    <View style={styles().priceContainer}>
      <TextScheme style={styles(colorScheme).priceLabel}>Price</TextScheme>
      <TextScheme style={styles().priceValue}>
        {priceFormat(data?.price)}
      </TextScheme>
    </View>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    priceContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',

      marginTop: 5,
    },

    priceLabel: {
      borderRadius: 4,
      borderColor: colorScheme === 'light' ? greenWaga : 'transparent',
      borderWidth: colorScheme === 'light' ? 1 : 0,
      backgroundColor: colorScheme === 'light' ? 'transparent' : greenWaga,
      fontWeight: '500',
      color: colorScheme === 'light' ? greenWaga : textColor.light,
      overflow: 'hidden',
      paddingHorizontal: 5,
      paddingVertical: 2,
    },

    priceValue: {
      fontWeight: '500',
      marginLeft: 5,
    },
  });
