import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  useColorScheme,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import TextScheme from '../components/TextScheme';
import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {screenHeight, screenWidth} from '../utilis/screenSize';
import NutritionalInfo from '../components/NutritionalInfo';
import {mainBackground} from '../utilis/appColors';
import LoadingScreen from '../components/LoadingScreen';

export default function DishDetails({navigation}) {
  const colorScheme = useColorScheme();

  const id = useSelector(state => state.dishId.id);
  const {data, loading} = useFetch();
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
        <TextScheme>{itemDetails?.description}</TextScheme>
        <TextScheme>
          <TextScheme>Price:</TextScheme> {itemDetails?.price}
        </TextScheme>

        <View style={styles().allergensContainer}>
          <TextScheme numofLine={1}>Allergens: </TextScheme>
          <TextScheme>{itemDetails?.allergens.join(', ')}</TextScheme>
        </View>

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
      color: 'red',
    },

    imageContainer: {
      width: screenWidth,
      height: screenHeight / 2,
    },

    image: {
      width: '100%',
      height: '100%',
    },

    allergensContainer: {
      flexDirection: 'row',
    },

    allergensTitle: {
      fontWeight: 'bold',
      color: '#E42521',
    },

    allergens: {
      width: screenWidth / 1.5,
    },
  });
