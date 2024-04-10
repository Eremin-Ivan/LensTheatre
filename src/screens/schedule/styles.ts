import {StyleSheet} from 'react-native';
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
    position: 'absolute',
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(16),
    color: Themes.white,
    alignSelf: 'center',
  },
});
