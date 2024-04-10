import React from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {Themes} from '../../../Theme';

// interface State {
//   items?: AgendaSchedule;
// }
export const ModalText = observer(() => {
  // const timeToString = (time: number) => {
  //   const date = new Date(time);
  //   return date.toISOString().split('T')[0];
  // };
  // const state: State = {
  //   items: undefined,
  // };
  // const date = new Date();
  // const currentDay = moment();

  const navigation = useNavigation();

  return (
    <View style={Styles.screen}>
      <Pressable
        style={Styles.goBack}
        onPress={() => {
          navigation.navigate('Main');
        }}
      />

      <View style={Styles.notesBox}>
        <View style={Styles.infiBox}>
          <Text style={Styles.infoText}>им.</Text>
          <Text style={Styles.infoTitle}>ЛЕН</Text>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={Styles.infoText}>театр</Text>
            <Text style={[Styles.infoText, {color: Themes.red}]}>совета</Text>
          </View>
        </View>

        <View style={Styles.info}>
          <Text>версия: 1.0 (демо)</Text>
          <Text>разработчик: И.Еремин</Text>
          <Text>
            безопасность: данная версия приложения не имеет доступа к данным
            владельца устройства и не может быть использована в качестве
            устройства накопления информации (фото,видео,аудио).
          </Text>
        </View>
        <Text
          style={{
            alignSelf: 'flex-end',
            top: 12,
            marginRight: 10,
          }}>
          {' '}
          07.04.2024
        </Text>

        {/* <Text>{date.toUTCString()}</Text>
        <CustomInput title="спектакль:" value="1234" onChangeText={() => {}} />
        <CustomInput title="роль:" value="" onChangeText={() => {}} />
        <CustomInput title="начало:" value="" onChangeText={() => {}} />
        <CustomInput title="дополнительно:" value="" onChangeText={() => {}} /> */}
      </View>
    </View>
  );
});
