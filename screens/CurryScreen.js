import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {v4 as uuid} from 'uuid';
import Item from '../components/Item';
import useFetch from '../hooks/useFetch';

export default function CurryScreen({navigation}) {
  const {data} = useFetch();
  return (
    <FlatList
      style={styles.screen}
      data={data}
      numColumns={2}
      keyExtractor={() => uuid()}
      renderItem={dataArr => <Item navigation={navigation} data={dataArr} />}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
});
