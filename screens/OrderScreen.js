import React from 'react';
import {FlatList, useColorScheme, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import CompleteOrderButton from '../components/CompleteOrderButton';
import OrderItem from '../components/OrderItem';
import TotalOrderPrice from '../components/TotalOrderPrice';
import CartItemProvider from '../context/cartItemContext';
import {screenBackground} from '../utilis/appColors';

export default function OrderScreen({navigation}) {
  const colorScheme = useColorScheme();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const reverseItems = [...cartItems].reverse();

  const {totalCartAmount} = cart;

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={styles(colorScheme).screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        data={reverseItems}
        renderItem={({item, index}) => (
          <CartItemProvider>
            <OrderItem
              index={index}
              navigation={navigation}
              colorScheme={colorScheme}
              item={item}
            />
          </CartItemProvider>
        )}
        ListFooterComponent={
          <>
            <TotalOrderPrice totalCartAmount={totalCartAmount} />
            <CompleteOrderButton />
          </>
        }
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
