import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Compositions,
  Main,
  ModalText,
  MyCalendar,
  Repertoire,
  Roles,
  Schedule,
  WebSiteLensoveta,
} from './src';
import {VideoArchive} from './src/screens/videoArchive/VideoArchive';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Themes} from './Theme';
import {ToDoList} from './assets/components/toDoList/ToDoList';

const Stack = createNativeStackNavigator();

const TestApp = () => {
  const [hidden] = useState(false);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Themes.black}
        hidden={hidden}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="WebSiteLensoveta" component={WebSiteLensoveta} />
          <Stack.Screen name="VideoArchive" component={VideoArchive} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="MyCalendar" component={MyCalendar} />
          <Stack.Screen
            name="ModalText"
            component={ModalText}
            options={{presentation: 'transparentModal', animation: 'fade'}}
          />
          <Stack.Screen name="Repertoire" component={Repertoire} />
          <Stack.Screen name="Compositions" component={Compositions} />
          <Stack.Screen name="Roles" component={Roles} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default TestApp;
