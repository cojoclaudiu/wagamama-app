import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {screenHeight, screenWidth} from '../utilis/screenSize';

export default function DishDetails({navigation}) {
  const id = useSelector(state => state.dishId.id);
  const {data} = useFetch();
  const itemDetails = data?.find(item => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: itemDetails?.name,
    });
  }, [itemDetails, navigation]);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: itemDetails?.imageUrl}} />
      </View>
      <Text>{itemDetails?.description}</Text>
      <Text>Price: {itemDetails?.price}</Text>

      <View style={styles.allergensContainer}>
        <Text style={styles.allergensTitle}>Allergens: </Text>
        <Text>{itemDetails?.allergens.join(', ')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
});
