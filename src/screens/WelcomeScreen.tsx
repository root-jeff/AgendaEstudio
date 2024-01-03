import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {CustomButton} from '../components/BaseComponents/CustomButton';
import {PermissionsContext} from '../context/PermissionsContext';
import {BaseScreen} from '../Template/BaseScreen';

export const WelcomeScreen = () => {
  const {askPermission} = useContext(PermissionsContext);
  return (
    <BaseScreen
      style={{
        paddingVertical: 200,
        paddingHorizontal: 90,
        justifyContent: 'space-evenly',
      }}>
      <Image
        source={require('../assets/logo.png')}
        style={{
          height: 200,
          width: 300,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}></Image>
      <Text
        style={{
          textAlign: 'justify',
          maxWidth: 300,
          marginBottom: 30,
        }}>
        Por favor, permite acceder a tu ubicación, a la memoria interna y a la
        cámara de tu dispositivo para que tengas la mejor experiencia en la
        aplicación
      </Text>
      <CustomButton
        onPress={askPermission}
        title={'Dar permisos'}></CustomButton>
    </BaseScreen>
  );
};
