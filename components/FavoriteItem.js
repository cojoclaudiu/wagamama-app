import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
  LayoutAnimation,
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import TextScheme from './TextScheme';
import {setId} from '../store/dishSlice';
import {setCategory} from '../store/categorySlice';
import {itemThumbnail, redWaga} from '../utilis/appColors';
import {screenWidth} from '../utilis/screenSize';
import Icon from 'react-native-ionicons';
import {removeFromFavorite} from '../store/favoriteSlice';
import {layoutAnimConfig} from '../utilis/animations';

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
        <View style={styles().detailsContainer}>
          <Image style={styles().image} source={{uri: item.image}} />
          <View>
            <TextScheme fontWeight="500">{item.name}</TextScheme>
            <TextScheme>category: {item.category}</TextScheme>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(removeFromFavorite(item.id));
            // animation on removing item from list
            LayoutAnimation.configureNext(layoutAnimConfig(LayoutAnimation));
          }}>
          <View style={styles().removeIcon}>
            <Icon
              ios="ios-remove-circle"
              android="md-remove-circle"
              size={27}
              color={redWaga}
            />
          </View>
        </TouchableWithoutFeedback>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    favoriteItemContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: screenWidth - 40,
      backgroundColor: itemThumbnail[colorScheme],
      borderRadius: 5,
      marginVertical: 5,
    },

    detailsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    image: {
      width: 80,
      height: 80,
    },

    removeIcon: {
      // marginRight: 15,
      justifyContent: 'center',
      alignItems: 'flex-end',
      // backgroundColor: 'yellow',
      padding: 15,
    },
  });
