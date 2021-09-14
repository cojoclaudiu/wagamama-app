import React, {useContext, useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import {screenHeight, screenWidth} from '../utilis/screenSize';
import TextScheme from '../components/TextScheme';
import priceFormat from '../utilis/priceFormat';
import {itemThumbnail} from '../utilis/appColors';
import ImageOrderScreen from '../components/ImageOrderScreen';
import QuantityOrderButtons from '../components/QuantityOrderButtons';
import * as Animatable from 'react-native-animatable';
import OverlayRemoveCartItem from './OverlayRemoveCartItem';
import {CartItemContext} from '../context/cartItemContext';

export default function OrderItem({item, colorScheme, navigation, index}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const {overlay, setOverlay} = useContext(CartItemContext);
  console.log(overlay);

  return (
    <TouchableWithoutFeedback
      onPress={() => setOverlay(false)}
      onLongPress={() => {
        setSelectedItem(index);
        setOverlay(true);
      }}>
      <Animatable.View
        animation="zoomIn"
        style={styles(colorScheme, selectedItem, index).orderContainer}>
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
          <QuantityOrderButtons item={item} colorScheme={colorScheme}>
            <ImageOrderScreen navigation={navigation} item={item} />
          </QuantityOrderButtons>
        </View>

        <View style={styles().titlePriceContainer}>
          <TextScheme fontWeight="500" style={styles().itemName}>
            {item.name}
          </TextScheme>
          <TextScheme fontWeight="bold">{priceFormat(item.price)}</TextScheme>
        </View>

        {selectedItem === index && overlay && (
          <OverlayRemoveCartItem colorScheme={colorScheme} id={item.id} />
        )}
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    orderContainer: {
      flex: 1,
      backgroundColor: itemThumbnail[colorScheme],
      height: screenHeight / 4.5,
      width: screenWidth / 1.05,
      margin: 10,
      borderRadius: 5,
      padding: 10,
      justifyContent: 'center',
      alignSelf: 'center',
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
