import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if neccessary</Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the{' '}
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};
export default CovidMessage;
