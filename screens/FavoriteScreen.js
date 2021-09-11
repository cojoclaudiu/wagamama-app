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
import TextScheme from '../components/TextScheme';
import {mainBackground} from '../utilis/appColors';
import {screenHeight, screenWidth} from '../utilis/screenSize';

export default function FavoriteScreen({navigation}) {
  const colorScheme = useColorScheme();
  const favorite = useSelector(state => state.favorite);
  const {totalItems, favItems} = favorite;

  // I'm reversing the array because my last added item have to be first on the list
  const reverseItems = [...favItems].reverse();

  return totalItems === 0 ? (
    <View style={styles(colorScheme).screen}>
      <View style={styles().imageContainer}>
        <Image
          style={styles().image}
          resizeMode="contain"
          source={require('../assets/images/no-results.gif')}
        />
        <TextScheme style={styles().text}>
          sorry, you don't have any favorite dishes
        </TextScheme>
      </View>
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
      paddingTop: screenHeight / 5,
    },

    imageContainer: {
      width: screenWidth / 1.5,
      height: screenWidth / 1.5,
    },
    image: {
      width: '100%',
      height: '100%',
    },

    text: {
      fontSize: 16,
      textAlign: 'center',
      paddingTop: 10,
    },
  });
