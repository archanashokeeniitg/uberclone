import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';
import styles from './styles';

const UberTypes = (props) => {
  console.log('props', props);
  const confirmRide = () => {
    console.log('hi');
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type} />
      ))}
      {/* bottom Components*/}

      <Pressable style={styles.confirmButton} onPress={confirmRide}>
        <Text style={styles.text}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};
export default UberTypes;
