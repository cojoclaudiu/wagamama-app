import React, {useEffect} from 'react';
import {FlatList, StyleSheet, useColorScheme} from 'react-native';

import {v4 as uuid} from 'uuid';
import Item from '../components/Item';
import LoadingScreen from '../components/LoadingScreen';
import useFetch from '../hooks/useFetch';
import {screenBackground} from '../utilis/appColors';
import {useSelector} from 'react-redux';
import apiCategory from '../utilis/apiRoutes';

export default function DishScreen({navigation}) {
  const category = useSelector(state => state.category.category.category);
  const url = apiCategory(category);

  const colorScheme = useColorScheme();
  const {data, loading} = useFetch(url);

  useEffect(() => {
    navigation.setOptions({
      title: category,
    });
  }, [category, navigation]);

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
