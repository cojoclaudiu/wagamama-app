import React from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';
import {screenWidth} from '../utilis/screenSize';
import TextScheme from '../components/TextScheme';
import priceFormat from '../utilis/priceFormat';
import {useDispatch} from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../store/cartSlice';
import {addRemove, itemThumbnail, textColor} from '../utilis/appColors';

export default function OrderItem({item, colorScheme}) {
  const dispatch = useDispatch();
  return (
    <View style={styles(colorScheme).orderContainer}>
      <View style={styles().priceQtyContainer}>
        <View style={styles().totalProductQty}>
          <TextScheme fontWeight="bold">Product quantity: </TextScheme>
          <TextScheme>{item.quantity}</TextScheme>
        </View>
        <View style={styles().totalProductPrice}>
          <TextScheme fontWeight="bold">Total product price: </TextScheme>
          <TextScheme>{priceFormat(item.totalProductPrice)}</TextScheme>
        </View>
      </View>

      <View style={styles().imageButtonsContainer}>
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch(
              addItemToCart({
                id: item.id,
                price: item.price,
              }),
            )
          }>
          <View style={styles(colorScheme).qtyButton}>
            <Icon ios="ios-add" android="md-add" />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles().imageContainer}>
          <Image style={styles().image} source={{uri: item.image}} />
        </View>
        <TouchableWithoutFeedback
          onPress={() => dispatch(removeItemFromCart(item.id))}>
          <View style={styles(colorScheme).qtyButton}>
            <Icon ios="ios-remove" android="md-remove" />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles().titlePriceContainer}>
        <TextScheme fontWeight="500" style={styles().itemName}>
          {item.name}
        </TextScheme>
        <TextScheme fontWeight="bold">{priceFormat(item.price)}</TextScheme>
      </View>
    </View>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    orderContainer: {
      backgroundColor: itemThumbnail[colorScheme],
      margin: 10,
      borderRadius: 5,
      padding: 10,
    },

    priceQtyContainer: {
      paddingLeft: screenWidth / 15,
    },

    imageButtonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    imageContainer: {
      width: screenWidth / 3.5,
      height: screenWidth / 3.5,
    },

    image: {
      width: '100%',
      height: '100%',
    },

    qtyButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: addRemove[colorScheme],
      borderRadius: 5,
      width: 40,
      height: 40,
    },

    titlePriceContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    totalProductQty: {
      flexDirection: 'row',
    },

    totalProductPrice: {
      flexDirection: 'row',
    },

    itemName: {
      paddingRight: 5,
    },
  });
