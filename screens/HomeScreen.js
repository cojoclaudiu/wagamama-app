import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';
import HomeScreenDetails from '../components/HomeScreenData';
import {screenBackground} from '../utilis/appColors';
import GoToButton from '../components/GoToButton';
import HalfScreenButton from '../components/HalfScreenButton';

export default function HomeScreen({navigation}) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles(colorScheme).screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles().screenItems}>
          <HomeScreenDetails />

          <View style={styles().buttonsContainer}>
            <HalfScreenButton
              name="shopping bag"
              position="left"
              color="green"
              navigation={navigation}
              destination="Order"
            />
            <HalfScreenButton
              name="favorites"
              position="right"
              color="red"
              navigation={navigation}
              destination="Favorite"
            />
          </View>

          <GoToButton
            name="ramen"
            navigation={navigation}
            colorScheme={colorScheme}
          />

          <GoToButton
            name="curry"
            navigation={navigation}
            colorScheme={colorScheme}
          />

          <GoToButton
            name="teppanyaki"
            navigation={navigation}
            colorScheme={colorScheme}
          />

          <GoToButton
            name="donburi"
            navigation={navigation}
            colorScheme={colorScheme}
          />
          <GoToButton
            name="kokoro bowls"
            navigation={navigation}
            colorScheme={colorScheme}
          />

          <GoToButton
            name="summer noodles"
            navigation={navigation}
            colorScheme={colorScheme}
          />

          <GoToButton
            name="sides"
            navigation={navigation}
            colorScheme={colorScheme}
          />

          <GoToButton
            name="desserts"
            navigation={navigation}
            colorScheme={colorScheme}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: screenBackground[colorScheme],
    },
    screenItems: {
      marginHorizontal: 10,
      marginBottom: 10,
    },

    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20,
    },
  });
