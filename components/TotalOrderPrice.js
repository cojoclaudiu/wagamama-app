import React from 'react';
import {StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import * as Animatable from 'react-native-animatable';

import priceFormat from '../utilis/priceFormat';

export default function TotalOrderPrice({totalCartAmount}) {
  return (
    <Animatable.View animation="fadeInRight" style={styles.totalContainer}>
      <TextScheme style={styles.totalText} fontWeight="400">
        Total bag price:{' '}
      </TextScheme>
      <TextScheme style={styles.totalText} fontWeight="bold">
        {priceFormat(totalCartAmount)}
      </TextScheme>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  totalText: {
    fontSize: 16,
  },
});
