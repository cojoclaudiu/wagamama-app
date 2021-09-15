import React, {useState, useContext} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {addItemToCart, removeItemFromCart} from '../store/cartSlice';
import {useDispatch} from 'react-redux';
import {increaseDecrease} from '../utilis/appColors';
import {CartItemContext} from '../context/cartItemContext';
import Icon from 'react-native-ionicons';
import {layoutAnimConfig} from '../utilis/animations';

export default function QuantityOrderButtons({children, item, colorScheme}) {
  const {setAnimation} = useContext(CartItemContext);

  const [colorIncrease, setColorIncrease] = useState('');
  const [colorDecrease, setColorDecrease] = useState('');

  const dispatch = useDispatch();
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() =>
          dispatch(
            addItemToCart({
              id: item.id,
              price: item.price,
            }),
          )
        }
        onPressIn={() => {
          setColorIncrease('increase');
          setAnimation('rubberBand');
        }}
        onPressOut={() => {
          setColorIncrease('');
          setAnimation('');
        }}>
        <View style={styles(colorScheme, colorIncrease).qtyButton}>
          <Icon ios="ios-add" android="md-add" />
        </View>
      </TouchableWithoutFeedback>

      {children}

      <TouchableWithoutFeedback
        onPress={() => dispatch(removeItemFromCart(item.id))}
        onPressIn={() => {
          setColorDecrease('decrease');
          setAnimation('rubberBand');
        }}
        onPressOut={() => {
          setColorDecrease('');
          setAnimation('');
          LayoutAnimation.configureNext(layoutAnimConfig(LayoutAnimation));
        }}>
        <View style={styles(colorScheme, colorDecrease).qtyButton}>
          <Icon ios="ios-remove" android="md-remove" />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = (colorScheme, color) =>
  StyleSheet.create({
    qtyButton: {
      justifyContent: 'center',
      alignItems: 'center',
      // Adding dynamic background color for the + and - buttons
      backgroundColor:
        increaseDecrease[
          (color === '' && colorScheme) ||
            (color === 'increase' && 'increase') ||
            (color === 'decrease' && 'decrease')
        ],
      borderRadius: 5,
      width: 40,
      height: 40,
    },
  });
