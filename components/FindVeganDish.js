import React from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import {screenWidth} from '../utilis/screenSize';
import {greenWaga, itemThumbnail} from '../utilis/appColors';

export default function FindVeganDish({colorScheme, toggle, setSwitch}) {
  return (
    <View style={styles(colorScheme).toggleContainer}>
      <TextScheme fontSize={14} fontWeight="500">
        Find vegan dishes
      </TextScheme>
      <View style={styles().switchContainer}>
        <Switch
          style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
          trackColor={{false: '#767577', true: greenWaga}}
          ios_backgroundColor="#3e3e3e"
          thumbColor="white"
          onChange={setSwitch}
          value={toggle}
        />
      </View>
    </View>
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
      borderRadius: (screenWidth / 6) * 0.2237,
    },

    switchContainer: {
      paddingLeft: 10,
    },
  });
