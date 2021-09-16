import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, useColorScheme, SafeAreaView} from 'react-native';

import {v4 as uuid} from 'uuid';
import Item from '../components/Item';
import LoadingScreen from '../components/LoadingScreen';
import useFetch from '../hooks/useFetch';
import {screenBackground} from '../utilis/appColors';
import {useSelector} from 'react-redux';
import apiCategory from '../utilis/apiRoutes';
import FindVeganDish from '../components/FindVeganDish';

export default function DishListScreen({navigation}) {
  const [toggleVegan, setToggleVegan] = useState(false);
  const colorScheme = useColorScheme();

  const category = useSelector(state => state.category.category.category);
  const url = apiCategory(category);

  const {data, loading} = useFetch(url);
  const isVegan = data?.filter(item => item.suitableFor.vegan);

  useEffect(() => {
    navigation.setOptions({
      title: category,
    });
  }, [category, navigation]);

  return data && !loading ? (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={styles(colorScheme).screen}>
      <FindVeganDish
        toggle={toggleVegan}
        setSwitch={() => setToggleVegan(prev => !prev)}
        colorScheme={colorScheme}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        data={toggleVegan ? isVegan : data}
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
      flex: 1,
      backgroundColor: screenBackground[colorScheme],
    },
  });
