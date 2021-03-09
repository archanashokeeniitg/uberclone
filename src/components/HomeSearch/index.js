import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons
            style={styles.timeContainer}
            name={'keyboard-arrow-down'}
            size={16}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'white'} />
        </View>
        <Text style={styles.destinationText}> Nightclub</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#2b80ff'}]}>
          <AntDesign name={'home'} size={16} color={'white'} />
        </View>
        <Text style={styles.destinationText}> Nightclub</Text>
      </View>
    </View>
  );
};
export default HomeSearch;
