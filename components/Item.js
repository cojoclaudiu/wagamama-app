import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {screenWidth, screenHeight} from '../utilis/screenSize';
import {setId} from '../store/dishSlice';

export default function Item({data, navigation}) {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('DishDetails');
        dispatch(setId({id: data.item.id}));
      }}>
      <View style={styles.itemsContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: data.item.imageUrl}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{data.item.name.toLowerCase()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: screenWidth / 2 - 10,
    height: screenHeight / 5,
    backgroundColor: '#F8F8F9',
    borderRadius: 5,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontWeight: 'bold',
  },
});
