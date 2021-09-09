import React from 'react';
import {Text, StyleSheet, useColorScheme} from 'react-native';
import {textColor} from '../utilis/appColors';

export default function TextScheme({
  fontSize,
  fontWeight,
  children,
  style,
  textAlign,
  ...rest
}) {
  const colorScheme = useColorScheme();
  return (
    <Text
      style={[styles(fontSize, fontWeight, colorScheme, textAlign).text, style]}
      {...rest}>
      {children}
    </Text>
  );
}

const styles = (
  fontSize = 14,
  fontWeight = 'normal',
  colorScheme = 'light',
  textAlign = 'auto',
) =>
  StyleSheet.create({
    text: {
      fontSize,
      color: textColor[colorScheme],
      fontWeight,
      textAlign: textAlign,
    },
  });
