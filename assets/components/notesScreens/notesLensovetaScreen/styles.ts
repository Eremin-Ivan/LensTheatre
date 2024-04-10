import {StyleSheet} from 'react-native';
import {Themes} from '../../../../Theme';

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },

  title: {
    fontSize: 14,
    color: 'white',
  },
  noteBox: {
    marginHorizontal: 6,
    height: 80,
    backgroundColor: Themes.colorLens,
    borderRadius: 6,
  },
});
