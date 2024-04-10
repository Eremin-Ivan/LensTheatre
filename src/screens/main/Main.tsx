import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import {Styles} from './styles';
import {MyCalendar} from '..';

export const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.screen}>
      <View style={{flex: 1}}>
        <MyCalendar />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WebSiteLensoveta');
        }}>
        <Image
          source={{
            uri: 'https://lensov-theatre.spb.ru/images/backgrounds/Logo_Theatre_Lensoveta5.png',
          }}
          style={Styles.logoLensoveta}
        />
      </TouchableOpacity>

      <View style={Styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VideoArchive');
          }}>
          <Text style={Styles.title}>В И Д Е О</Text>
          <View style={Styles.miniBall} />
          <View style={Styles.maxiBall} />
          <View style={Styles.cub} />
          <Image
            style={{width: 80, height: 70}}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/019/879/206/original/video-camera-symbol-video-camera-icon-symbol-illustration-on-transparent-background-free-png.png',
            }}
          />
          <Text style={Styles.title}>А Р Х И В</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={Styles.SCRbox}
            onPress={() => {
              navigation.navigate('Schedule');
            }}>
            <Text style={Styles.title}>Расписание</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.SCRbox}
            onPress={() => {
              navigation.navigate('Compositions');
            }}>
            <Text style={Styles.title}>Составы</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.SCRbox}
            onPress={() => {
              navigation.navigate('Repertoire');
            }}>
            <Text style={Styles.title}>Репертуар</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={Styles.videoButton}
          onPress={() => {
            navigation.navigate('ModalText');
          }}>
          <Image
            source={{uri: 'https://clipart-library.com/img/1244579.png'}}
            style={Styles.playsBox}
          />
          <Text style={Styles.titleText}>И Н Ф О</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
