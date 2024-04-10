import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import WebView from 'react-native-webview';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const VideoArchive = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.screen}>
      <Text style={[Styles.title]}>Password: 0123456789</Text>
      <WebView
        source={{
          uri: 'https://cloud.lensov-theatre.spb.ru/s/ZATAEr2ojkQcCfT/authenticate/showShare',
        }}
        style={Styles.screen}
      />

      <TouchableOpacity
        style={Styles.backButton}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text style={Styles.title}>назад</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
