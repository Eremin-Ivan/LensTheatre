import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './styles';
import WebView from 'react-native-webview';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const WebSiteLensoveta = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.webLensovetaBox}>
      <WebView
        source={{uri: 'https://lensov-theatre.spb.ru/afisha/'}}
        style={Styles.webLensovetaBox}
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
