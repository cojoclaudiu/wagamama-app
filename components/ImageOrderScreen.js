import React, {useContext} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import {screenWidth} from '../utilis/screenSize';
import {setId} from '../store/dishSlice';
import {setCategory} from '../store/categorySlice';
import * as Animatable from 'react-native-animatable';
import {CartItemContext} from '../context/cartItemContext';

export default function ImageOrderScreen({
  navigation,
  item,
  setSelectedItem,
  setOverlay,
  index,
}) {
  const dispatch = useDispatch();
  const {animation} = useContext(CartItemContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('DishDetails');
        dispatch(setId({id: item.id}));
        dispatch(setCategory({category: item.category}));
      }}
      onLongPress={() => {
        setSelectedItem(index);
        setOverlay(true);
      }}>
      <View style={styles.imageContainer}>
        <Animatable.Image
          animation={animation}
          duration={400}
          style={styles.image}
          source={{uri: item.image}}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth / 3.5,
    height: screenWidth / 3.5,
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
