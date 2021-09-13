import React from 'react';
import {FlatList, useColorScheme, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import CompleteOrderButton from '../components/CompleteOrderButton';
import OrderItem from '../components/OrderItem';
import TotalOrderPrice from '../components/TotalOrderPrice';
import {screenBackground} from '../utilis/appColors';

export default function OrderScreen({navigation}) {
  const colorScheme = useColorScheme();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const {totalCartAmount} = cart;

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={styles(colorScheme).screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        data={cartItems}
        renderItem={({item}) => (
          <OrderItem
            navigation={navigation}
            colorScheme={colorScheme}
            item={item}
          />
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
