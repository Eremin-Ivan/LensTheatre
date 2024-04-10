import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  Calendar,
  CalendarList,
  CalendarProvider,
  DateData,
  ExpandableCalendar,
} from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './styles';
import React, {useState} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  Pressable,
} from 'react-native';
import {Themes} from '../../../Theme';
import {Add} from '../../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {todayString} from 'react-native-calendars/src/expandableCalendar/commons';
import Day from 'react-native-calendars/src/calendar/day';
import BasicDay from 'react-native-calendars/src/calendar/day/basic';
import {ModalText} from '..';
import {ToDoList} from '../../../assets/components/toDoList/ToDoList';

interface State {
  items?: AgendaSchedule;
}

const timeToString = (time: number) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export const MyCalendar: React.FC = observer(() => {
  const state: State = {
    items: undefined,
  };
  const [items, setItems] = useState({});

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderEmptyDate = () => {
    return (
      <View style={Styles.emptyDate}>
        <Text style={{color: 'red'}}>This is empty date!</Text>
      </View>
    );
  };

  // const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
  //   const fontSize = isFirst ? 16 : 14;
  //   const color = isFirst ? 'black' : '#43515c';
  //   return (
  //     <TouchableOpacity
  //       style={[Styles.item, {height: reservation.height}]}
  //       onPress={() => Alert.alert(reservation.name)}>
  //       <Text style={{fontSize, color}}>{reservation.name}</Text>
  //     </TouchableOpacity>
  //   );
  // };

  // const renderDay = day => {
  //   // if (day) {
  //   //   return <Text style={Styles.customDay}>{day.getDay()}</Text>;
  //   // }
  //   return (
  //     <View style={Styles.dayItem}>
  //       {/* <Text style={{color: 'blue'}}>1234</Text> */}
  //     </View>
  //   );
  // };
  const renderItem = items => {
    return (
      <TouchableOpacity style={{flex: 1}}>
        <View style={Styles.itemBox}>
          <Text style={Styles.title}>{items.name}</Text>
          <Avatar.Text label="J" />
          <Text>{}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  ////////////////////////////////////////////////
  // const currentDay = moment();

  const navigation = useNavigation();

  const [isVisible, setVisible] = useState(false);
  const onPress = () => {
    setVisible(true);
  };
  const goBack = () => {
    setVisible(false);
  };

  // const [selectedDay, setSelectedDay] = React.useState(
  //   currentDay.format('YYYY-MM-DD'),
  // );

  // const selectDay = value => {
  //   setSelectedDay(value);
  // };

  // const renderItem = item => {
  //   //console.log('--render item---', moment().format('MM/DD/YYYY HH:mm:ss A'));
  //   const index = moment(item).format('YYYY-MM-DD');
  //   return (
  //     <View key={index} style={Styles.agenda}>
  //       <Text style={Styles.title}>{index}</Text>
  //     </View>
  //   );
  // };
  // const renderArrow = e => {
  //   return <View style={{backgroundColor: 'red'}} />;
  // };

  // const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={Styles.screen}>
      <View
        style={{
          flex: 1,
        }}>
        <Calendar
          firstDay={1}
          enableSwipeMonths
          theme={{
            calendarBackground: Themes.black,
            monthTextColor: Themes.white,
            arrowColor: Themes.white,
            selectedDayBackgroundColor: 'red',
            selectedDayTextColor: 'blue',
            selectedDotColor: 'red',
          }}
          dayComponent={({date, state}) => {
            return (
              <TouchableOpacity
                style={[
                  Styles.dayComponent,
                  state === 'today' ? Styles.disabledDate : Styles.toDay,
                ]}
                // onPress={date => {
                //   navigation.navigate('ModalText');
                // }}
              >
                <Text
                  style={[
                    Styles.customDay,
                    state === 'disabled'
                      ? Styles.disabledText
                      : Styles.defaultText,
                  ]}>
                  {date?.day}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* <Button
          color={Themes.colorLens}
          title="записи"
          onPress={() => {
            navigation.navigate('ToDoList');
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
});
