import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import TextScheme from './components/TextScheme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DishScreen from './screens/DishListScreen.js';
import DishDetails from './screens/DishDetails';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {headerColor, redWaga, textColor} from './utilis/appColors';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

const stackNavStyle = colorScheme => {
  return {
    headerStyle: {
      backgroundColor: headerColor[colorScheme],
    },
    headerTintColor: textColor[colorScheme],
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
};

export default function App() {
  const colorScheme = useColorScheme();

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
                  <TextScheme
                    style={[
                      styles.starIcon,
                      {transform: [{rotateX: '180deg'}]},
                    ]}>
                    ⭑
                  </TextScheme>
                );
              },
              title: 'wagamama',
              ...stackNavStyle(colorScheme),
            }}
          />

          <Stack.Screen
            name="DishScreen"
            component={DishScreen}
            options={stackNavStyle(colorScheme)}
          />
          <Stack.Screen
            name="DishDetails"
            component={DishDetails}
            options={{
              ...stackNavStyle(colorScheme),
            }}
          />

          <Stack.Screen
            name="Favorite"
            backgroundColor="red"
            component={FavoriteScreen}
            options={{
              ...stackNavStyle(colorScheme),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  starIcon: {
    color: redWaga,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 102,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
