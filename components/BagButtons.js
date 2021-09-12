import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import TextScheme from './TextScheme';
import {useDispatch} from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../store/cartSlice';
import {greenWaga, redWaga} from '../utilis/appColors';
import {useSelector} from 'react-redux';

export default function BagButtons({item}) {
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
          <View style={styles('order').button}>
            <TextScheme>order</TextScheme>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => dispatch(removeItemFromCart(item.id))}>
          <View style={styles('remove').button}>
            <TextScheme>remove</TextScheme>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = type =>
  StyleSheet.create({
    buttonsContainer: {
      // backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'center',
      width: '50%',
    },

    button: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor:
        (type === 'order' && greenWaga) || (type === 'remove' && redWaga),
      width: 80,
    },
  });
