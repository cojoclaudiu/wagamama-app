import React, {useEffect} from 'react';
import {FlatList, StyleSheet, useColorScheme, SafeAreaView} from 'react-native';

import {v4 as uuid} from 'uuid';
import Item from '../components/Item';
import LoadingScreen from '../components/LoadingScreen';
import useFetch from '../hooks/useFetch';
import {screenBackground} from '../utilis/appColors';
import {useSelector} from 'react-redux';
import apiCategory from '../utilis/apiRoutes';

export default function DishScreen({navigation}) {
  const colorScheme = useColorScheme();

  const category = useSelector(state => state.category.category.category);
  const url = apiCategory(category);

  const {data, loading} = useFetch(url);

  useEffect(() => {
    navigation.setOptions({
      title: category,
    });
  }, [category, navigation]);

  return data && !loading ? (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={styles(colorScheme).screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        data={data}
        numColumns={2}
        keyExtractor={() => uuid()}
        renderItem={dataArr => <Item navigation={navigation} data={dataArr} />}
      />
    </SafeAreaView>
  ) : (
    <LoadingScreen />
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      backgroundColor: screenBackground[colorScheme],
    },
  });
