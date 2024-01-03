import React from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {CustomButton} from '../components/BaseComponents/CustomButton';
import {icons} from '../theme/appTheme';
import {Alert} from '../utils/Dialog/Alert/Alert';
import {Document} from '../utils/Dialog/Document/Document';

const Examples = [
  {
    title: 'Alerta',
    onPress: () =>
      Alert.show('default', {
        title: 'Alerta Default',
        message: 'Mensaje de alerta default',
        icon: icons.cloudAlert,
        iconColor: 'red',
      }),
  },
  {
    title: 'Alerta Si No',
    onPress: () =>
      Alert.show('yesno', {
        title: 'Alerta Si No',
        message: 'Mensaje de alerta si no',
      }),
  },
  {
    title: 'Alerta Promt',
    onPress: () =>
      Alert.show('promt', {
        title: 'Alerta Promt',
        message: 'Mensaje de alerta promt',
        placeholder: 'escribe un texto',
        onPress: console.log,
      }),
  },
  {
    title: 'Alerta Imagen',
    onPress: () =>
      Alert.show('image', {
        title: 'Alerta Imagen',
        message: 'Mensaje de alerta imagen',
        imagePath:
          'https://codigoonclick.com/wp-content/uploads/2021/04/react-native-cursos-mas-vendidos.png',
      }),
  },
  {
    title: 'Alerta MultiOpción',
    onPress: () =>
      Alert.show('multioptions', {
        title: 'Alerta MultiOpción',
        message: 'Mensaje de alerta multiopción',
        alertOptions: [
          {title: 'Opción 1', onPress: () => console.log('Opción 1')},
          {title: 'Opción 2', onPress: () => console.log('Opción 2')},
          {title: 'Opción 3', onPress: () => console.log('Opción 3')},
        ],
      }),
  },
  {
    title: 'Mostrar documento',
    onPress: () =>
      Document.show({
        title: 'Documento de ejemplo',
        fileName: 'sample.pdf',
        filePath: 'https://pdfobject.com/pdf/sample.pdf',
        download: true,
      }),
  },
];

export const HomeScreen = () => {
  return (
    <BaseScreen>
      {Examples.map((props, index) => (
        <CustomButton key={index} {...props}></CustomButton>
      ))}
    </BaseScreen>
  );
};
