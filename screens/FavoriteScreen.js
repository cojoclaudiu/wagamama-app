import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {useSelector} from 'react-redux';
import FavoriteItem from '../components/FavoriteItem';
import {mainBackground} from '../utilis/appColors';

export default function FavoriteScreen({navigation}) {
  const colorScheme = useColorScheme();
  const favorite = useSelector(state => state.favorite);
  const {totalItems, favItems} = favorite;

  // I'm reversing the array because my last added item have to be first on the list
  const reverseItems = [...favItems].reverse();

  return totalItems === 0 ? (
    <View style={styles(colorScheme).screen}>
      <Text>You don't any favorite dishes, find your favorites</Text>
    </View>
  ) : (
    <SafeAreaView style={styles(colorScheme).screen}>
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
    },
  });
