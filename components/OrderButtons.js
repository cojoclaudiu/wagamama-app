import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import {useDispatch} from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  removeCompletely,
} from '../store/cartSlice';
import {greenWaga} from '../utilis/appColors';
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-ionicons';

export default function OrderButtons({item}) {
  const id = useSelector(state =>
    state.cart.cartItems.find(dish => dish.id === item.id),
  );
  const dispatch = useDispatch();

  return (
    <View style={styles().buttonsContainer}>
      {!id?.inCart ? (
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch(
              addItemToCart({
                id: item.id,
                category: item.category,
                name: item.name.toLowerCase(),
                price: item.price,
                image: item.imageUrl,
              }),
            )
          }>
          <Animatable.View animation="fadeInLeft" style={styles('add').button}>
            <TextScheme style={styles().textButton} fontWeight="bold">
              add to bag
            </TextScheme>
            <Icon ios="ios-add" android="md-add" color="white" size={23} />
          </Animatable.View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => dispatch(removeCompletely(item.id))}>
          <Animatable.View
            animation="fadeInLeft"
            style={styles('added').button}>
            <TextScheme style={styles().textButton} fontWeight="bold">
              added to your bag
            </TextScheme>
            <Icon
              ios="ios-checkmark"
              android="md-checkmark"
              color="white"
              size={23}
            />
          </Animatable.View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = type =>
  StyleSheet.create({
    buttonsContainer: {
      margin: 20,
      alignItems: 'center',
    },

    button: {
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor:
        (type === 'add' && greenWaga) || (type === 'added' && '#288641'),
    },

    textButton: {
      color: 'white',
      marginRight: 5,
    },
  });
