import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TextTitleNormal from './TextTitleNormal';

export default function NutritionalInfo({data}) {
  const [per, setPer] = useState(null);
  const [servingButton, setServingButton] = useState(true);
  const [gramsButton, setGramsButton] = useState(true);

  return (
    <>
      <View>
        {gramsButton && (
          <Button
            title="per 100g"
            onPress={() => {
              setPer('per_100g');
              setGramsButton(false);
              setServingButton(true);
            }}
          />
        )}
        {servingButton && (
          <Button
            title="per serving"
            onPress={() => {
              setPer('per_serving');
              setServingButton(false);
              setGramsButton(true);
            }}
          />
        )}
      </View>

      {per && (
        <View style={styles.nutritionalContainer}>
          <Text style={styles.nutritionalTitle}>
            Nutritional information{' '}
            {per === 'per_100g' ? 'per 100g' : 'per serving'}
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
