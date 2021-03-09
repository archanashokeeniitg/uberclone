import React from 'react';
import {View, Text} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

import HomeMap from '../../components/HomeMap';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
      {/* bottom Components*/}
    </View>
  );
};
export default HomeScreen;
