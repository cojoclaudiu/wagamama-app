import React, {useState} from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {borderColor} from '../utilis/appColors';
import ButtonNutritional from './ButtonNutritional';
import TextScheme from './TextScheme';

export default function NutritionalInfo({data}) {
  const colorScheme = useColorScheme();
  const [per, setPer] = useState(null);
  const [selected, setSelected] = useState(null);
  const [perGrams, setPerGrams] = useState(null);
  const [perServing, setPerServing] = useState(null);

  const perGramsHandler = () => {
    setPer('per_100g');
    setPerGrams(true);
    setPerServing(false);
    setSelected(true);
  };

  const perServingHandler = () => {
    setPer('per_serving');
    setPerServing(true);
    setPerGrams(false);
    setSelected(true);
  };

  return (
    <>
      <View style={styles().buttonsContainer}>
        <ButtonNutritional
          title="per 100g"
          nutrition={perGramsHandler}
          selected={selected && perGrams}
        />

        <ButtonNutritional
          title="per serving"
          nutrition={perServingHandler}
          selected={selected && perServing}
        />
      </View>

      {per && (
        <View style={styles(colorScheme).nutritionalContainer}>
          <TextScheme fontSize={16} fontWeight="bold">
            Nutritional information per{' '}
            {per === 'per_100g' ? '100g' : 'serving'}
          </TextScheme>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Carbs: </TextScheme>
            <TextScheme>{data?.nutritional_information[per].carbs}</TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Kcal: </TextScheme>
            <TextScheme>
              {data?.nutritional_information[per].energy.kcal}
            </TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Kj: </TextScheme>
            <TextScheme>
              {' '}
              {data?.nutritional_information[per].energy.kj}
            </TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Fat: </TextScheme>
            <TextScheme>{data?.nutritional_information[per].fat}</TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Fibre: </TextScheme>
            <TextScheme>{data?.nutritional_information[per].fibre}</TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Protein: </TextScheme>
            <TextScheme>
              {data?.nutritional_information[per].protein}
            </TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Salt: </TextScheme>
            <TextScheme>{data?.nutritional_information[per].salt}</TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Saturated fat: </TextScheme>
            <TextScheme>
              {data?.nutritional_information[per].sat_fat}
            </TextScheme>
          </View>

          <View style={styles(colorScheme).nutritionalContentLine}>
            <TextScheme fontWeight="bold">Sodium: </TextScheme>
            <TextScheme>{data?.nutritional_information[per].sodium}</TextScheme>
          </View>

          <View style={styles().nutritionalContentLineLastChild}>
            <TextScheme fontWeight="bold">Sugar: </TextScheme>
            <TextScheme>{data?.nutritional_information[per].sodium}</TextScheme>
          </View>
        </View>
      )}
    </>
  );
}

const styles = colorScheme =>
  StyleSheet.create({
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    nutritionalContainer: {
      flex: 1,
      marginTop: 10,
    },
    nutritionalTitle: {
      fontSize: 16,
      // fontWeight: 'bold',
    },

    nutritionalContentLine: {
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomColor: borderColor[colorScheme],
      borderBottomWidth: 1,
      height: 40,
      // backgroundColor: 'blue',
    },

    nutritionalContentLineLastChild: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
    },
  });
