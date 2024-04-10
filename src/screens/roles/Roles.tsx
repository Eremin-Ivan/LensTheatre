import React, {useState} from 'react';

import {View, Text, Button} from 'react-native';

import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Themes} from '../../../Theme';

export const Roles = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.screen}>
      <Button
        color={Themes.colorLens}
        title="назад"
        onPress={() => {
          navigation.navigate('Main');
        }}
      />
      <Text>TEST</Text>
    </View>
  );
};
