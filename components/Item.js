import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import TextScheme from './TextScheme';
import {useDispatch} from 'react-redux';
import {screenHeight} from '../utilis/screenSize';
import {setId} from '../store/dishSlice';
import {borderThumbnail, itemThumbnail} from '../utilis/appColors';

export default function Item({data, navigation}) {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('DishDetails');
        dispatch(setId({id: data.item.id}));
      }}>
      <View style={styles(colorScheme).itemsContainer}>
        <View style={styles(colorScheme).imageContainer}>
          <Animatable.View animation="bounceIn" iterationCount={1}>
            {!data ? (
              <Text>Loading...</Text>
            ) : (
              <Image
                defaultSource={require('../assets/images/placeholder.png')}
                source={{uri: data?.item.imageUrl}}
                style={styles(colorScheme).image}
                resizeMode="contain"
              />
            )}
          </Animatable.View>
        </View>

        <TextScheme
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles().title}>
          {data.item.name.toLowerCase()}
        </TextScheme>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    itemsContainer: {
      flex: 1,
      height: screenHeight / 5,
      alignContent: 'space-around',
      alignItems: 'center',
      borderColor: borderThumbnail[colorScheme],
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: itemThumbnail[colorScheme],
      margin: 10,
      overflow: 'hidden',
    },

    imageContainer: {
      width: '100%',
      height: '85%',
    },

    image: {
      width: '100%',
      height: '100%',
    },

    title: {
      fontWeight: '400',
      width: '80%',
      textAlign: 'center',
    },
  });
