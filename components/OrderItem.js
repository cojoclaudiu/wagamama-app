import React from 'react';
import {View, StyleSheet} from 'react-native';
import {screenWidth} from '../utilis/screenSize';
import TextScheme from '../components/TextScheme';
import priceFormat from '../utilis/priceFormat';
import {itemThumbnail} from '../utilis/appColors';
import ImageOrderScreen from '../components/ImageOrderScreen';
import QuantityOrderButtons from '../components/QuantityOrderButtons';
import * as Animatable from 'react-native-animatable';
import AnimationProvider from '../context/animationContext';

export default function OrderItem({item, colorScheme, navigation}) {
  return (
    <Animatable.View
      animation="zoomIn"
      style={styles(colorScheme).orderContainer}>
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

      <AnimationProvider>
        <View style={styles().imageButtonsContainer}>
          <QuantityOrderButtons item={item} colorScheme={colorScheme}>
            <ImageOrderScreen navigation={navigation} item={item} />
          </QuantityOrderButtons>
        </View>
      </AnimationProvider>

      <View style={styles().titlePriceContainer}>
        <TextScheme fontWeight="500" style={styles().itemName}>
          {item.name}
        </TextScheme>
        <TextScheme fontWeight="bold">{priceFormat(item.price)}</TextScheme>
      </View>
    </Animatable.View>
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
