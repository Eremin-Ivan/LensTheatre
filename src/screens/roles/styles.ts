import {Dimensions, StyleSheet} from 'react-native';
import {Themes} from '../../../Theme';
import {normalize} from '../../../utils';

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backButton: {
    width: normalize(80),
    height: normalize(40),
    borderRadius: normalize(6),
    backgroundColor: Themes.colorLens,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  container: {
    flex: 1,
    padding: normalize(40),
    marginTop: normalize(40),
  },
  title: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    marginBottom: normalize(20),
  },
  heading: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    marginBottom: normalize(7),
    color: 'green',
  },
  input: {
    borderWidth: normalize(3),
    borderColor: '#ccc',
    padding: normalize(10),
    marginBottom: normalize(10),
    borderRadius: normalize(10),
    fontSize: normalize(18),
  },
  addButton: {
    backgroundColor: 'green',
    padding: normalize(10),
    borderRadius: normalize(5),
    marginBottom: normalize(10),
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(18),
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(15),
    fontSize: normalize(18),
  },
  itemList: {
    fontSize: normalize(19),
  },
  taskButtons: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: normalize(10),
    color: 'green',
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
});
