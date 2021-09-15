import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {setCategory} from '../store/categorySlice';
import apiCategory from '../utilis/apiRoutes';
import {greenWaga, itemThumbnail} from '../utilis/appColors';
import TextScheme from './TextScheme';
import * as Animatable from 'react-native-animatable';

export default function GoToButton({navigation, name, colorScheme}) {
  const dispatch = useDispatch();
  const categoryData = useFetch(apiCategory(name));
  const imagesData = categoryData.data?.map(item => item.imageUrl);

  const generateRandom = arr => {
    return arr && arr[Math.floor(Math.random(arr.length) * arr.length)];
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch(setCategory({category: name.toLowerCase()}));
        navigation.navigate('DishListScreen');
      }}>
      <Animatable.View
        animation="zoomIn"
        style={styles(colorScheme).buttonContainer}>
        <View style={styles().imageContainer}>
          <Image
            resizeMode="cover"
            style={styles().image}
            source={{uri: generateRandom(imagesData)}}
          />
        </View>
        <View style={styles().textContainer}>
          <TextScheme style={styles().textButton}>{name}</TextScheme>
        </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: itemThumbnail[colorScheme],
      padding: 5,
      borderRadius: 5,
      marginBottom: 10,
    },

    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: 50,
      height: 50,
      borderRadius: 25,

      borderColor: greenWaga,
      borderWidth: 1.2,
    },

    image: {
      width: '120%',
      height: '120%',
      borderRadius: 25,
    },

    textContainer: {
      paddingLeft: 10,
    },

    textButton: {
      fontSize: 16,
    },

    messageText: {
      paddingLeft: 5,
      fontSize: 12.5,
      fontWeight: '300',
    },
  });
