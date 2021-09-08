import React from 'react';
import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import {v4 as uuid} from 'uuid';
import useFetch from '../hooks/useFetch';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

console.log(screenWidth);

export default function CurryScreen() {
  const {data} = useFetch();
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={() => uuid()}
      renderItem={dataArr => (
        <View style={styles.screen}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: dataArr.item.imageUrl}}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>{dataArr.item.name.toLowerCase()}</Text>
          <Text>Price:{dataArr.item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  imageContainer: {
    width: screenWidth / 2.1,
    height: screenHeight / 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontWeight: 'bold',
  },
});
