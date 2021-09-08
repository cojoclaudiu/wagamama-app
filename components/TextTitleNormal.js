import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function TextTitleNormal({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
