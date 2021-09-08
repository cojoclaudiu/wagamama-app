import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonNutritional from './ButtonNutritional';
import TextTitleNormal from './TextTitleNormal';

export default function NutritionalInfo({data}) {
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
      <View style={styles.buttonsContainer}>
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
        <View style={styles.nutritionalContainer}>
          <Text style={styles.nutritionalTitle}>
            Nutritional information per{' '}
            {per === 'per_100g' ? '100g' : 'serving'}
          </Text>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Carbs: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].carbs}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Kcal: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].energy.kcal}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Kj: </TextTitleNormal>
            <Text> {data?.nutritional_information[per].energy.kj}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Fat: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].fat}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Fibre: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].fibre}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Protein: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].protein}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Salt: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].salt}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Saturated fat: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].sat_fat}</Text>
          </View>

          <View style={styles.nutritionalContentLine}>
            <TextTitleNormal>Sodium: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].sodium}</Text>
          </View>

          <View style={styles.nutritionalContentLineLastChild}>
            <TextTitleNormal>Sugar: </TextTitleNormal>
            <Text>{data?.nutritional_information[per].sodium}</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
    borderBottomColor: '#D9DADD',
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
