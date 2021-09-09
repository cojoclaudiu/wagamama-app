import React from 'react';
import {FlatList, StyleSheet, useColorScheme, View} from 'react-native';

import {v4 as uuid} from 'uuid';
import Item from '../components/Item';
import LoadingScreen from '../components/LoadingScreen';
import useFetch from '../hooks/useFetch';
import {screenBackground} from '../utilis/appColors';

export default function CurryScreen({navigation}) {
  const colorScheme = useColorScheme();
  const {data, loading} = useFetch();
  return data && !loading ? (
    <>
      <FlatList
        style={styles(colorScheme).screen}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        data={data}
        numColumns={2}
        keyExtractor={() => uuid()}
        renderItem={dataArr => <Item navigation={navigation} data={dataArr} />}
      />
    </>
  ) : (
    <LoadingScreen />
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      backgroundColor: screenBackground[colorScheme],
      paddingBottom: 10,
    },
  });
