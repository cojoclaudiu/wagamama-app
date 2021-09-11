import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import TextScheme from './TextScheme';
import {setId} from '../store/dishSlice';
import {setCategory} from '../store/categorySlice';
import {itemThumbnail, borderThumbnail} from '../utilis/appColors';
import {screenWidth} from '../utilis/screenSize';

export default function FavoriteItem({navigation, item, colorScheme}) {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('DishDetails');
        dispatch(setId({id: item.id}));
        dispatch(setCategory({category: item.category}));
      }}>
      <Animatable.View
        animation="zoomIn"
        style={styles(colorScheme).favoriteItemContainer}>
        <Image style={styles().image} source={{uri: item.image}} />
        <View>
          <TextScheme fontWeight="500">{item.name}</TextScheme>
          <TextScheme>category: {item.category}</TextScheme>
        </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    favoriteItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: screenWidth - 40,
      backgroundColor: itemThumbnail[colorScheme],
      borderColor: borderThumbnail[colorScheme],
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 5,
    },
    image: {
      width: 80,
      height: 80,
    },
  });
