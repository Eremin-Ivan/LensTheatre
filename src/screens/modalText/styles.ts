import {StyleSheet} from 'react-native';
import {Themes} from '../../../Theme';
import {normalize} from '../../../utils';

export const Styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    // backgroundColor: Themes.colorLens,
    opacity: 0.9,
    alignSelf: 'center',
  },
  goBack: {
    position: 'absolute',
    top: normalize(0),
    left: normalize(0),
    right: normalize(0),
    bottom: normalize(0),
    backgroundColor: Themes.black,
    opacity: 0.8,
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
    color: 'red',
  },
  notesBox: {
    top: normalize(150),
    width: '80%',
    height: '60%',
    backgroundColor: Themes.colorLens,
    borderColor: Themes.black,
    borderWidth: normalize(4),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: normalize(20),
  },
  infiBox: {
    top: normalize(-80),
    width: normalize(160),
    height: normalize(40),
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: normalize(6),
    flexDirection: 'row',
    borderColor: Themes.black,
    borderWidth: 0.8,
  },
  infoTitle: {
    color: Themes.red,
    fontWeight: '500',
    fontSize: normalize(30),
    fontStyle: 'italic',
  },

  infoText: {
    height: normalize(16),
    color: Themes.black,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  info: {
    marginHorizontal: normalize(12),
  },
});
