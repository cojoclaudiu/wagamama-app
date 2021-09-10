import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, useColorScheme} from 'react-native';

import * as Animatable from 'react-native-animatable';
import TextScheme from '../components/TextScheme';
import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {screenHeight, screenWidth} from '../utilis/screenSize';
import NutritionalInfo from '../components/NutritionalInfo';
import {mainBackground} from '../utilis/appColors';
import LoadingScreen from '../components/LoadingScreen';
import apiCategory from '../utilis/apiRoutes';
import Allergens from '../components/Allergens';
import Price from '../components/Price';

export default function DishDetails({navigation}) {
  const colorScheme = useColorScheme();
  const category = useSelector(state => state.category.category.category);

  const id = useSelector(state => state.dishId.id);
  const {data, loading} = useFetch(apiCategory(category));
  const itemDetails = data?.find(item => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: itemDetails?.name,
    });
  }, [itemDetails, navigation]);

  return data && !loading ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles(colorScheme).screen}>
      <View style={styles().imageContainer}>
        <Animatable.Image
          animation="fadeInDownBig"
          style={styles().image}
          source={{uri: itemDetails?.imageUrl}}
        />
      </View>

      <View style={styles(colorScheme).itemDetails}>
        <TextScheme style={styles().description}>
          {itemDetails?.description}
        </TextScheme>
        <Price data={itemDetails} />
        <Allergens data={itemDetails} />
        <NutritionalInfo data={itemDetails} />
      </View>
    </ScrollView>
  ) : (
    <LoadingScreen />
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mainBackground[colorScheme],
    },

    itemDetails: {
      paddingHorizontal: 20,
      // alignItems: 'center',
    },

    description: {
      textAlign: 'justify',
    },

    imageContainer: {
      width: screenWidth,
      height: screenHeight / 2,
    },

    image: {
      width: '100%',
      height: '100%',
    },
  });
