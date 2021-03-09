import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e7e7e7',
    //margin: 10,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 1,
  },
  //title: {color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#434343',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 1,
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
export default styles;
