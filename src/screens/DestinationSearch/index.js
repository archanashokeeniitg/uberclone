import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [fromPlace, setFromPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  useEffect(() => {
    if (fromPlace && destinationPlace) {
      console.warn('useEffect called');
    }
  }, [fromPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setFromPlace({data, details});
            console.log(data, details);
          }}
          styles={{textInput: styles.textInput}}
          fetchDetails
          query={{
            key: 'AIzaSyARu8HiItXJsO_Aqa6tUzw_APh96GkyEuw',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          styles={{textInput: styles.textInput}}
          fetchDetails
          query={{
            key: 'AIzaSyARu8HiItXJsO_Aqa6tUzw_APh96GkyEuw',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default DestinationSearch;
