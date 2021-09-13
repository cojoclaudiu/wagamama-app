import React, {useContext} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import {screenWidth} from '../utilis/screenSize';
import {setId} from '../store/dishSlice';
import {setCategory} from '../store/categorySlice';
import * as Animatable from 'react-native-animatable';
import {AnimationContext} from '../context/animationContext';

export default function ImageOrderScreen({navigation, item}) {
  const dispatch = useDispatch();
  const {animation} = useContext(AnimationContext);
  // console.log(animation);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('DishDetails');
        dispatch(setId({id: item.id}));
        dispatch(setCategory({category: item.category}));
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
