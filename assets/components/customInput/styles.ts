import {StyleSheet} from 'react-native';
import {Themes} from '../../../Theme';
import {normalize} from '../../../utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Themes.black,
    opacity: 0.8,
  },
  contentWrapper: {
    backgroundColor: Themes.colorLens,
    width: '90%',
    borderRadius: normalize(8),
    paddingVertical: normalize(18),
    borderWidth: 1,
    borderColor: Themes.colorLens,
  },
  button: {
    alignSelf: 'center',
    marginTop: normalize(24),
  },
  inputWrapper: {
    alignItems: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: normalize(36),
    marginBottom: normalize(2),
    fontSize: normalize(14),
    color: Themes.black,
  },
  input: {
    color: Themes.black,
    paddingLeft: normalize(12),
    width: '80%',
    borderRadius: normalize(6),
    backgroundColor: Themes.white,
    opacity: 0.5,
  },
  row: {
    flexDirection: 'row',
  },
});
