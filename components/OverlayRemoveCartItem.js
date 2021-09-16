import React, {useContext} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {greenWaga, overlayBackground, redWaga} from '../utilis/appColors';
import {screenHeight, screenWidth} from '../utilis/screenSize';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {removeCompletely} from '../store/cartSlice';
import {CartItemContext} from '../context/cartItemContext';
import {layoutAnimConfig} from '../utilis/animations';

export default function OverlayRemoveCartItem({id, colorScheme}) {
  const {setOverlay} = useContext(CartItemContext);
  const disptach = useDispatch();

  return (
    <Animatable.View animation="fadeIn" style={styles(colorScheme).overlay}>
      <TouchableWithoutFeedback
        onPress={() => {
          disptach(removeCompletely(id));
          LayoutAnimation.configureNext(layoutAnimConfig(LayoutAnimation));
        }}>
        <Animatable.View animation="zoomIn" style={styles().removeButton}>
          <Text style={styles().textButton}>Remove</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setOverlay(false)}>
        <Animatable.View animation="zoomIn" style={styles().keepButton}>
          <Text style={styles().textButton}>Keep</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    </Animatable.View>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      flexDirection: 'row-reverse',
      height: screenHeight / 4.3,
      width: screenWidth / 1.05,
      position: 'absolute',
      backgroundColor: overlayBackground[colorScheme],
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
      padding: 1,
    },

    removeButton: {
      flexDirection: 'row',
      backgroundColor: redWaga,
      padding: 10,
      borderRadius: screenWidth / 5 / 2,

      justifyContent: 'center',
      alignItems: 'center',
      height: screenWidth / 5,
      width: screenWidth / 5,
      marginRight: 10,
    },

    keepButton: {
      flexDirection: 'row',
      backgroundColor: greenWaga,
      padding: 10,
      borderRadius: screenWidth / 5 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      height: screenWidth / 5,
      width: screenWidth / 5,
      marginLeft: 10,
    },

    textButton: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
    },
  });
