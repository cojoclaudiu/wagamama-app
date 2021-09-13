import React from 'react';
import {Button, StyleSheet, useColorScheme, ScrollView} from 'react-native';
import HomeScreenDetails from '../components/HomeScreenData';
import {screenBackground} from '../utilis/appColors';
import {useDispatch} from 'react-redux';
import {setCategory} from '../store/categorySlice';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles(useColorScheme()).screen}>
      <HomeScreenDetails />

      <Button
        title="Bag"
        onPress={() => {
          navigation.navigate('Order');
        }}
      />

      <Button
        title="Favorites"
        onPress={() => {
          navigation.navigate('Favorite');
        }}
      />

      <Button
        title="Go to RAMEN..."
        onPress={() => {
          dispatch(setCategory({category: 'ramen'}));
          navigation.navigate('DishListScreen');
        }}
      />

      <Button
        title="Go to CURRY..."
        onPress={() => {
          dispatch(setCategory({category: 'curry'}));
          navigation.navigate('DishListScreen');
        }}
      />
      <Button
        title="Go to TEPPANYAKI..."
        onPress={() => {
          dispatch(setCategory({category: 'teppanyaki'}));
          navigation.navigate('DishListScreen');
        }}
      />
    </ScrollView>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: screenBackground[colorScheme],
    },
  });
