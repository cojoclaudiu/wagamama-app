import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useColorScheme,
} from 'react-native';
import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {screenHeight, screenWidth} from '../utilis/screenSize';
import NutritionalInfo from '../components/NutritionalInfo';
import {mainBackground} from '../utilis/appColors';

export default function DishDetails({navigation}) {
  const colorScheme = useColorScheme();

  const id = useSelector(state => state.dishId.id);
  const {data} = useFetch();
  const itemDetails = data?.find(item => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: itemDetails?.name,
    });
  }, [itemDetails, navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles(colorScheme).screen}>
      <View style={styles().imageContainer}>
        <Image style={styles().image} source={{uri: itemDetails?.imageUrl}} />
      </View>

      <View style={styles(colorScheme).itemDetails}>
        <Text>{itemDetails?.description}</Text>
        <Text>Price: {itemDetails?.price}</Text>

        <View style={styles().allergensContainer}>
          <Text numoFline={1} style={styles.allergensTitle}>
            Allergens:{' '}
          </Text>
          <Text style={styles().allergens}>
            {itemDetails?.allergens.join(', ')}
          </Text>
        </View>

        <NutritionalInfo data={itemDetails} />
      </View>
    </ScrollView>
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
