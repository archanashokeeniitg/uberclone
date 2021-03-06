import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = (props) => {
  const {type} = props;

  console.log('typeeee', {type});

  const getImageName = () => {
    if (type.type == 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (type.type == 'UberXL') {
      return require('../../assets/images/UberXL.jpeg');
    }
    if (type.type == 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImageName()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name={'person'} size={16} />4{' '}
        </Text>
        <Text style={styles.time}>8.03pm dropoff</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est.${type.price}</Text>
      </View>
    </View>
  );
};
export default UberTypeRow;
