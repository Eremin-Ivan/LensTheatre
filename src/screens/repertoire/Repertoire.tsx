import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import {Styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Repertoire = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://disk.yandex.ru/d/L28ix--GeO4WNQ',
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main');
        }}
        style={Styles.backButton}>
        <Text style={Styles.title}>назад</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
