import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import {textColor, screenBackground} from '../utilis/appColors';

export default function LoadingScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles(colorScheme).loadingScreen}>
      <ActivityIndicator size="large" color={textColor[colorScheme]} />
    </View>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    loadingScreen: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      // alignItems: 'center',
      backgroundColor: screenBackground[colorScheme],
    },
  });
