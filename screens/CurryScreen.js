import React from 'react';
import {FlatList, StyleSheet, useColorScheme} from 'react-native';

import {v4 as uuid} from 'uuid';
import Item from '../components/Item';
import useFetch from '../hooks/useFetch';
import {screenBackground} from '../utilis/appColors';

export default function CurryScreen({navigation}) {
  const {data} = useFetch();
  return (
    <FlatList
      style={styles(useColorScheme()).screen}
      data={data}
      numColumns={2}
      keyExtractor={() => uuid()}
      renderItem={dataArr => <Item navigation={navigation} data={dataArr} />}
    />
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      backgroundColor: screenBackground[colorScheme],
    },
  });
