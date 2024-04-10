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
    position: 'absolute',
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(16),
    color: Themes.white,
    alignSelf: 'center',
  },
  agenda: {
    marginHorizontal: normalize(6),
    height: normalize(80),
    backgroundColor: Themes.colorLens,
    borderRadius: normalize(6),
  },
  todayButton: {
    marginLeft: normalize(-10),
    top: normalize(-130),
    // backgroundColor: Themes.red,
    elevation: normalize(6),
    // shadowColor: 'red',
  },
  sectionBox: {
    backgroundColor: Themes.black,
  },
  addButton: {
    left: normalize(4),
    padding: normalize(8),
    top: normalize(330),
    position: 'absolute',
  },
  modalScreen: {
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Themes.colorLens,
  },
  emptyDate: {
    // backgroundColor: 'red',
    height: normalize(15),
    flex: 1,
    paddingTop: normalize(30),
  },
  item: {
    backgroundColor: Themes.colorLens,
    flex: 1,
    borderRadius: normalize(5),
    padding: normalize(10),
    marginRight: normalize(10),
    marginTop: normalize(17),
  },
  customDay: {
    fontSize: normalize(20),
    fontWeight: '600',
  },
  dayItem: {
    width: normalize(30),
    height: normalize(100),
    // marginLeft: 34,
    // backgroundColor: 'red',
  },
  knobButton: {
    top: normalize(10),
    width: normalize(80),
    height: normalize(6),
    backgroundColor: Themes.colorLens,
    elevation: 0.6,
    shadowColor: Themes.white,
    borderRadius: normalize(6),
    borderColor: 'white',
    borderWidth: 0.8,
  },
  itemBox: {
    flex: 1,
    backgroundColor: Themes.colorLens,
    borderColor: Themes.black,
    borderWidth: normalize(4),
    borderRadius: normalize(20),
  },
  disabledText: {
    color: Themes.gray,
    fontSize: normalize(16),
    fontWeight: '300',
  },
  defaultText: {
    color: Themes.colorLens,
  },
  dayComponent: {
    width: normalize(50),
    height: normalize(36),
    alignItems: 'center',
    borderColor: Themes.colorLens,
    borderWidth: 0.3,
    justifyContent: 'center',
    borderRadius: normalize(6),
  },
  disabledDate: {backgroundColor: Themes.white},
  toDay: {backgroundColor: Themes.black},

  modalBox: {
    top: normalize(10),
    width: '80%',
    height: '90%',
    backgroundColor: Themes.colorLens,
    borderColor: Themes.black,
    borderWidth: normalize(4),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: normalize(20),
  },
});
