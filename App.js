import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import TextScheme from './components/TextScheme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CurryScreen from './screens/CurryScreen';
import DishDetails from './screens/DishDetails';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {headerColor, textColor} from './utilis/appColors';

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
              ...stackNavStyle(useColorScheme()),
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            name="Curry"
            component={CurryScreen}
            options={stackNavStyle(useColorScheme())}
          />
          <Stack.Screen
            name="DishDetails"
            component={DishDetails}
            options={stackNavStyle(useColorScheme())}
          />
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
