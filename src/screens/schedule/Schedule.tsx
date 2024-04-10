import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Pressable} from 'react-native';
import WebView from 'react-native-webview';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';

// import RNHTMLtoPDF from 'react-native-html-to-pdf';

export const Schedule = () => {
  // const [pdfPath, setPdfPath] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // const [count, setCount] = useState(1);
  // const orderLine = [
  //   {
  //     id: 1,
  //     product: 'Product 1',
  //     quantity: 1,
  //     price: '$10.00',
  //   },
  //   {
  //     id: 2,
  //     product: 'Product 2',
  //     quantity: 2,
  //     price: '$20.00',
  //   },
  //   {
  //     id: 3,
  //     product: 'Product 3',
  //     quantity: 3,
  //     price: '$30.00',
  //   },
  // ];

  // const generatePDF = async () => {
  //   setLoading(true);
  //   const html = `

  //   <head>
  //       <meta name=viewport content="initial-scale=1">
  //   </head>
  //   <body>
  //       <style>
  //       .spin {

  //           position: absolute;
  //           margin: auto;
  //           left: 0;
  //           right: 0;
  //           top: 0;
  //           bottom: 0;

  //           box-sizing: border-box;
  //           border: 2px solid transparent;
  //           border-radius: 50%;

  //           animation: spin_animation 1s infinite linear;
  //           background: linear-gradient(1deg, rgba(0,0,0,0), rgba(0,0,0,0));
  //           -webkit-backface-visibility: hidden;
  //           backface-visibility: hidden;

  //           line-height: 38px;
  //           width: 38px;
  //           height: 38px;
  //           background-position: -2px -44px;

  //           border-top-color: #fc0;
  //           border-left-color: #fc0;
  //       }

  //       @keyframes spin_animation {
  //           from {
  //               transform: rotate(0);
  //           }
  //           to {
  //               transform: rotate(360deg);
  //           }
  //       }
  //       </style>
  //       <div class="spin" />

  //       <script type="text/javascript">
  //           try {
  //               sessionStorage.setItem('zeroTime', Date.now());
  //           } catch (e) {}

  //           onerror = function(e) {
  //               console.log(e);
  //               location.assign("https://docviewer.yandex.ru/view/1472764155/?*=GTsfzuoxzEhaLJdMGH5cbJHL8Tt7InVybCI6InlhLWRpc2stcHVibGljOi8vek0vZU9wSG9XaEQzNjVTb2dWc083L0Q4NGs4TGpaeU5zNEpaN1NUUHh6RjNZTkdwODVSM0RySW9MZjRJdlZLMnEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoi0KDQsNGB0L%2FQuNGB0LDQvdC40LUucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiIxNDcyNzY0MTU1IiwidHMiOjE3MDk1OTEyMzk0MjQsInl1IjoiMTAxNDEwNTY5MTY4MTY2ODM0NiIsImVtYmVkIjoiZG9jcyJ9&nosw=1");
  //           };

  //           fetch("service-worker-load?url=https%3A%2F%2Fdocviewer.yandex.ru%2Fview%2F1472764155%2F%3F*%3DGTsfzuoxzEhaLJdMGH5cbJHL8Tt7InVybCI6InlhLWRpc2stcHVibGljOi8vek0vZU9wSG9XaEQzNjVTb2dWc083L0Q4NGs4TGpaeU5zNEpaN1NUUHh6RjNZTkdwODVSM0RySW9MZjRJdlZLMnEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoi0KDQsNGB0L%252FQuNGB0LDQvdC40LUucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiIxNDcyNzY0MTU1IiwidHMiOjE3MDk1OTEyMzk0MjQsInl1IjoiMTAxNDEwNTY5MTY4MTY2ODM0NiIsImVtYmVkIjoiZG9jcyJ9").then(function(response) {
  //               if (response.headers.has('sw-error')) {
  //                   onerror();
  //                   return;
  //               }
  //               // step 3
  //               location.reload()
  //           }, onerror);
  //       </script>
  //   </body>`;
  // Alert.alert('hi');
  //   const options = {
  //     html,
  //     filename: `invoice_${count}`,
  //     directory: 'Invoises',
  //   };
  //   const file = await RNHTMLtoPDF.convert(options);
  //   Alert.alert('seccess', `PDF save to ${file.filePath}`);

  //   try {
  //   } catch (error) {}
  // };
  const navigation = useNavigation();

  return (
    <View style={Styles.screen}>
      <WebView
        source={{
          uri: 'https://docviewer.yandex.ru/?url=ya-disk-public%3A%2F%2FzM%2FeOpHoWhD365SogVsO7%2FD84k8LjZyNs4JZ7STPxzF3YNGp85R3DrIoLf4IvVK2q%2FJ6bpmRyOJonT3VoXnDag%3D%3D&amp;name=%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5.pdf&amp;nosw=1&amp;embed=docs&amp;hideLoaders=1&amp;authUrl=https%3A%2F%2Fpassport.yandex.ru%2Fauth%3Ffrom%3Dcloud%26origin%3Ddocs_web%26retpath%3Dhttps%253A%252F%252Fdocs.yandex.ru%252Fdocs%252Fview%253Furl%253Dya-disk-public%25253A%25252F%25252FzM%25252FeOpHoWhD365SogVsO7%25252FD84k8LjZyNs4JZ7STPxzF3YNGp85R3DrIoLf4IvVK2q%25252FJ6bpmRyOJonT3VoXnDag%25253D%25253D%2526name%253D%2525D0%2525A0%2525D0%2525B0%2525D1%252581%2525D0%2525BF%2525D0%2525B8%2525D1%252581%2525D0%2525B0%2525D0%2525BD%2525D0%2525B8%2525D0%2525B5.pdf%2526nosw%253D1',
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

      {/* <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
        <Pressable
          style={{width: 100, height: 100, backgroundColor: 'red'}}
          onPress={() => generatePDF()}>
          <Text>create PDF file</Text>
        </Pressable>
      </View> */}
    </View>
  );
};
