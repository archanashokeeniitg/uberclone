import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 20,
  },
  image: {height: 70, width: 90, resizeMode: 'contain'},
  middleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  type: {fontSize: 20, fontWeight: 'bold', marginBottom: 5},
  time: {color: '#5d5d5d'},
  price: {fontWeight: 'bold'},
  rightContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 100,
  },
});

export default styles;
