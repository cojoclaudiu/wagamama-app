import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {redWaga} from '../utilis/appColors';
import Icon from 'react-native-ionicons';

export default function HeartButton({onPress, favorite}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        {favorite ? (
          <Icon
            size={27}
            ios="ios-heart-empty"
            android="md-heart-empty"
            color={redWaga}
          />
        ) : (
          <Icon size={27} ios="ios-heart" android="md-heart" color={redWaga} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
