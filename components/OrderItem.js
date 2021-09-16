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

          <View style={styles().productPrice}>
            <TextScheme fontWeight="bold">Product price: </TextScheme>
            <TextScheme>{priceFormat(item.price)}</TextScheme>
          </View>

          <View style={styles().totalProductPrice}>
            <TextScheme fontWeight="bold">Total product price: </TextScheme>
            <TextScheme>{priceFormat(item.totalProductPrice)}</TextScheme>
          </View>
        </View>

        <View style={styles().imageButtonsContainer}>
          <QuantityOrderButtons item={item} colorScheme={colorScheme}>
            <ImageOrderScreen
              index={index}
              setSelectedItem={setSelectedItem}
              setOverlay={setOverlay}
              navigation={navigation}
              item={item}
            />
          </QuantityOrderButtons>
        </View>

        <View style={styles().titlePriceContainer}>
          <TextScheme
            numberOfLines={1}
            ellipsizeMode="tail"
            fontWeight="500"
            style={styles().itemName}>
            {item.name}
          </TextScheme>
          {/* <TextScheme fontWeight="bold" style={styles().productPrice}>
            {priceFormat(item.price)}
          </TextScheme> */}
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
      height: screenHeight / 4.3,
      width: screenWidth / 1.05,
      margin: 10,
      borderRadius: (screenWidth / 5) * 0.2237,
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
      alignSelf: 'center',
    },

    totalProductQty: {
      flexDirection: 'row',
    },

    totalProductPrice: {
      flexDirection: 'row',
    },

    itemName: {
      paddingRight: 5,
      width: '85%',
      textAlign: 'center',
    },

    productPrice: {
      flexDirection: 'row',
    },
  });
