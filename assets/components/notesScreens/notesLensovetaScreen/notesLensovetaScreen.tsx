import {View, Text} from 'react-native';
import {Styles} from './styles';

export const NotesLensovetaScreen = () => {
  return (
    <View style={Styles.noteBox}>
      <Text style={Styles.title}>nameShow: ''</Text>
      <Text style={Styles.title}>role: ''</Text>
      <Text style={Styles.title}>time: ''</Text>
      <Text style={Styles.title}>discription: ''</Text>
    </View>
  );
};
