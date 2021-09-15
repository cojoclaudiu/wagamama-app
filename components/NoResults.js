import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {redWaga} from '../utilis/appColors';
import {screenWidth} from '../utilis/screenSize';
import TextScheme from './TextScheme';
import * as Animatable from 'react-native-animatable';

export default function NoResults({navigation, destination, description}) {
  return (
    <Animatable.View animation="zoomIn" style={styles.container}>
      <TextScheme style={styles.text}>{description}</TextScheme>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(destination)}>
        <Animatable.View
          style={styles.imageContainer}
          animation="pulse"
          duration={1800}
          easing="ease-out"
          iterationCount="infinite">
          <Image
            style={styles.image}
            source={require('../assets/images/placeholder.png')}
          />
        </Animatable.View>
      </TouchableWithoutFeedback>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    width: screenWidth / 2,
    height: screenWidth / 2,
    alignItems: 'center',
    backgroundColor: redWaga,
    borderRadius: screenWidth / 2,
    overflow: 'hidden',
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: '100%',
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 30,
  },
  star: {
    alignSelf: 'center',
  },
});
