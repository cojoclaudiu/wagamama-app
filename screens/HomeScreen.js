import React from 'react';
import {View, Text, Button} from 'react-native';
import useFetch from '../hooks/useFetch';

export default function HomeScreen({navigation}) {
  const {data} = useFetch();

  console.log(data);

  return (
    <View>
      <Text>wagamama home screen</Text>
      <Button
        title="Go to Details..."
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="Go to CURRY..."
        onPress={() => navigation.navigate('Curry')}
      />
    </View>
  );
}
