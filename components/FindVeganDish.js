import React from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import {greenWaga, itemThumbnail, mainBackground} from '../utilis/appColors';
import * as Animatable from 'react-native-animatable';

export default function FindVeganDish({colorScheme, toggle, setSwitch}) {
  return (
    <Animatable.View
      animation="fadeIn"
      style={styles(colorScheme).toggleContainer}>
      <TextScheme fontSize={14} fontWeight="500">
        Find vegan dishes
      </TextScheme>
      <View style={styles().switchContainer}>
        <Switch
          style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
          trackColor={{false: '#767577', true: greenWaga}}
          ios_backgroundColor="#3e3e3e"
          thumbColor={mainBackground[colorScheme]}
          onChange={setSwitch}
          value={toggle}
        />
      </View>
    </Animatable.View>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: itemThumbnail[colorScheme],
      margin: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 15,
    },

    switchContainer: {
      paddingLeft: 10,
    },
  });
