import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  useColorScheme,
  Image,
  ScrollView,
} from 'react-native';
import TextScheme from '../components/TextScheme';
import {screenBackground} from '../utilis/appColors';
import {screenHeight, screenWidth} from '../utilis/screenSize';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles(useColorScheme()).screen}>
      <View style={styles().imageContainer}>
        <Image
          style={styles().image}
          source={require('../assets/images/waga-main-mobile.png')}
        />
      </View>

      <View>
        <TextScheme style={styles().mainTitle} fontSize={22} fontWeight="bold">
          join our plant pledge
        </TextScheme>

        <View style={styles().descriptionContainer}>
          <TextScheme textAlign="center">
            our world is demanding action, but where do we begin? we believe
            small choices create big change + collectively we can make a
            difference
          </TextScheme>

          <TextScheme textAlign="center">
            eating less meat + dairy has been dubbed the most essential +
            own-able action we can all take, to reduce carbon emissions
          </TextScheme>

          <TextScheme textAlign="center">
            which is why we’re committed to making half our menu plant-based by
            the end of 2021. meaning 50% of the dishes on our menu will be
            either vegan or vegetarian
          </TextScheme>

          <TextScheme textAlign="center">
            we’re now asking you our guests, to join our journey + make your own
            plant pledge for the planet
          </TextScheme>
        </View>
      </View>

      <Button
        title="Go to Details..."
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="Go to CURRY..."
        onPress={() => navigation.navigate('Curry')}
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

    mainTitle: {
      textAlign: 'center',
      paddingVertical: 20,
    },

    imageContainer: {
      width: screenWidth,
      height: screenHeight / 3,
    },
    image: {
      width: '100%',
      height: '100%',
      // resizeMode: 'contain',
    },

    descriptionContainer: {
      flex: 1,
      height: screenHeight / 4,
      justifyContent: 'space-between',
      marginHorizontal: 10,
    },
  });
