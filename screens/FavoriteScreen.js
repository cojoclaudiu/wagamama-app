import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {useSelector} from 'react-redux';
import FavoriteItem from '../components/FavoriteItem';
import NoResults from '../components/NoResults';
import {mainBackground} from '../utilis/appColors';
import {screenHeight, screenWidth} from '../utilis/screenSize';

export default function FavoriteScreen({navigation}) {
  const colorScheme = useColorScheme();
  const favorite = useSelector(state => state.favorite);
  const {totalItems, favItems} = favorite;

  // I'm reversing the array because my last added item have to be first on the list
  const reverseItems = [...favItems].reverse();

  return (
    <SafeAreaView style={styles(colorScheme).screen}>
      {totalItems === 0 ? (
        <NoResults
          description="sorry, you don't have any favorite dishes"
          navigation={navigation}
          destination="Home"
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={reverseItems}
          renderItem={({item}) => (
            <FavoriteItem
              colorScheme={colorScheme}
              item={item}
              navigation={navigation}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: mainBackground[colorScheme],
      paddingTop: screenHeight / 5,
    },
  });
