import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {screenHeight} from '../utilis/screenSize';
import {setId} from '../store/dishSlice';
import {borderColor, mainBackground} from '../utilis/appColors';

export default function Item({data, navigation}) {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('DishDetails');
        dispatch(setId({id: data.item.id}));
      }}>
      <View style={styles(colorScheme).itemsContainer}>
        <View style={styles(colorScheme).imageContainer}>
          <Image
            source={{uri: data.item.imageUrl}}
            style={styles(colorScheme).image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles(colorScheme).title}>
          {data.item.name.toLowerCase()}
        </Text>
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
      borderColor: borderColor[colorScheme],
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: mainBackground[colorScheme],
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
    },
  });
