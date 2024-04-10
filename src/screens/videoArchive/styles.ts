import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils';

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backButton: {
    width: normalize(110),
    height: normalize(56),
    borderRadius: normalize(6),
    backgroundColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    top: normalize(60),
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(14),
    color: 'black',
    alignSelf: 'center',
  },
});
