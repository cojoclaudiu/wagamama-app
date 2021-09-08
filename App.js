import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CurryScreen from './screens/CurryScreen';
import DishDetails from './screens/DishDetails';
import {Provider} from 'react-redux';
import {store} from './store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerLeft: () => {
                return (
                  <Text
                    style={[
                      styles.starIcon,
                      {transform: [{rotateX: '180deg'}]},
                    ]}>
                    ⭑
                  </Text>
                );
              },
              title: 'wagamama',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Curry" component={CurryScreen} />
          <Stack.Screen name="DishDetails" component={DishDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  starIcon: {
    color: '#D93633',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 102,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
