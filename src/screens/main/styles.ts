import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils';
import {Themes} from '../../../Theme';

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },

  webSiteBox: {
    width: normalize(360),
    height: normalize(105),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoLensoveta: {
    width: normalize(190),
    height: normalize(110),
    alignSelf: 'center',
  },
  videoButton: {
    width: normalize(100),
    height: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    top: normalize(16),
  },
  title: {
    fontSize: normalize(14),
    color: 'white',
  },
  SCRbox: {
    left: normalize(10),
    width: normalize(160),
    height: normalize(40),
    borderRadius: normalize(8),
    marginTop: normalize(14),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#a9986c',
    elevation: normalize(8),
    shadowColor: Themes.white,
  },
  row: {
    flexDirection: 'row',
    top: normalize(20),
    flex: 2 / 3,
    justifyContent: 'space-between',
    marginHorizontal: normalize(8),
  },
  playsBox: {
    width: normalize(74),
    height: normalize(80),
  },
  calendar: {
    backgroundColor: 'black',
  },
  calendarThemes: {
    backgroundColor: 'white',
    // textSectionTitleColor: '#b6c1cd',
    // selectedDayBackgroundColor: '#00adf5',
    // selectedDayTextColor: '#ffffff',
    // todayTextColor: '#00adf5',
    // dayTextColor: '#2d4150',S
  },

  titleIcon: {
    fontStyle: 'italic',
    fontSize: normalize(12),
  },
  miniBall: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(20),
    backgroundColor: Themes.beigea7,
    position: 'absolute',
    left: normalize(4),
    top: normalize(24),
  },
  maxiBall: {
    width: normalize(26),
    height: normalize(26),
    borderRadius: normalize(26),
    backgroundColor: Themes.beigea7,
    position: 'absolute',
    right: normalize(24),
    top: normalize(18),
  },
  cub: {
    width: normalize(54),
    height: normalize(36),
    borderRadius: normalize(8),
    backgroundColor: Themes.beiged4,
    position: 'absolute',
    // right: normalize(24),
    top: normalize(44),
  },
  titleText: {
    fontSize: normalize(12),
    color: Themes.black,
    position: 'absolute',
    fontWeight: '700',
  },
});
