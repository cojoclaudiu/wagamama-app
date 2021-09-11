import React, {useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-ionicons';

import * as Animatable from 'react-native-animatable';
import TextScheme from '../components/TextScheme';
import useFetch from '../hooks/useFetch';
import {screenHeight, screenWidth} from '../utilis/screenSize';
import NutritionalInfo from '../components/NutritionalInfo';
import {
  mainBackground,
  redWaga,
  screenBackground,
  textDarkBg,
} from '../utilis/appColors';
import LoadingScreen from '../components/LoadingScreen';
import apiCategory from '../utilis/apiRoutes';
import Allergens from '../components/Allergens';
import Price from '../components/Price';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorite, removeFromFavorite} from '../store/favoriteSlice';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DishDetails({navigation}) {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const category = useSelector(state => state.category.category.category);
  const id = useSelector(state => state.dishId.id);
  const isFavorite = useSelector(state =>
    state.favorite.favItems.find(item => item.id === id),
  );
  const {data, loading} = useFetch(apiCategory(category));
  const itemDetails = data?.find(item => item.id === id);

  const addToFavHandler = useCallback(() => {
    dispatch(
      addToFavorite({
        isFavorite: true,
        id: itemDetails?.id,
        category: itemDetails.category,
        name: itemDetails?.name,
        image: itemDetails?.imageUrl,
        price: itemDetails?.price,
      }),
    );
  }, [
    dispatch,
    itemDetails?.id,
    itemDetails?.category,
    itemDetails?.name,
    itemDetails?.imageUrl,
    itemDetails?.price,
  ]);

  const removeFavHandler = useCallback(() => {
    dispatch(removeFromFavorite(id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setOptions({
      title: itemDetails?.name.toLowerCase(),

      headerRight: () => (
        <TouchableWithoutFeedback
          onPress={!isFavorite ? addToFavHandler : removeFavHandler}>
          <View>
            {!isFavorite ? (
              <Icon
                size={27}
                ios="ios-heart-empty"
                android="md-heart-empty"
                color={redWaga}
              />
            ) : (
              <Icon
                size={27}
                ios="ios-heart"
                android="md-heart"
                color={redWaga}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      ),
    });
  }, [itemDetails, navigation, addToFavHandler, removeFavHandler, isFavorite]);

  return data && !loading ? (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={styles(colorScheme).screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().imageContainer}>
          <Animatable.Image
            animation="fadeInDownBig"
            style={styles().image}
            source={{uri: itemDetails?.imageUrl}}
          />
        </View>

        <View style={styles(colorScheme).itemDetails}>
          <Animatable.View animation="slideInRight">
            <Price data={itemDetails} colorScheme={colorScheme} />
            <TextScheme style={styles(colorScheme).description}>
              {itemDetails?.description}
            </TextScheme>
          </Animatable.View>

          <Allergens data={itemDetails} colorScheme={colorScheme} />
          <NutritionalInfo data={itemDetails} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    },

    description: {
      textAlign: 'justify',
      backgroundColor:
        colorScheme === 'dark' ? textDarkBg : screenBackground.light,
      borderRadius: 4,
      padding: 10,
      overflow: 'hidden',
      marginTop: 10,
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
