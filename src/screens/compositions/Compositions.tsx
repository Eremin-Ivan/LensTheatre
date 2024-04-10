import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './styles';
import WebView from 'react-native-webview';

export const Compositions = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.screen}>
      <WebView
        source={{
          uri: 'https://docviewer.yandex.ru/view/0/?*=ipti2%2BpyReDI2zBr%2BID0qfKiC557InVybCI6InlhLWRpc2stcHVibGljOi8vYTdlbzhuTG9lQ25vT2lLR0hFZk5OUVRYNzVOaE1JVlphbFZveit3VE90MXpOZjNJR1NUY0sycExLek8wOGJFcnEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoi0KHQvtGB0YLQsNCy0YsucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiIwIiwidHMiOjE3MDE5NjgwMjc4NTcsInl1IjoiOTc2MzQ0MzYxMTY5MjIwMzYxOSIsImVtYmVkIjoiZG9jcyJ9',
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main');
        }}
        style={Styles.backButton}>
        <Text style={Styles.title}>назад</Text>
      </TouchableOpacity>
    </View>
  );
};
