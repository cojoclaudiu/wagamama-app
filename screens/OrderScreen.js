import React from 'react';
import {
  FlatList,
  View,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../components/OrderItem';
import TextScheme from '../components/TextScheme';
import priceFormat from '../utilis/priceFormat';
import {screenBackground} from '../utilis/appColors';

export default function OrderScreen() {
  const colorScheme = useColorScheme();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={styles(colorScheme).screen}>
      <View>
        <TextScheme fontWeight="bold">Total bag price: </TextScheme>
        <TextScheme>{priceFormat(cart.totalCartAmount)}</TextScheme>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        data={cartItems}
        renderItem={({item}) => (
          <OrderItem colorScheme={colorScheme} item={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: screenBackground[colorScheme],
    },
  });
