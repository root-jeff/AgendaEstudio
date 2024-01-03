import React, {useState} from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {Text, View} from 'react-native';
import {colores} from '../theme/appTheme';
import {CustomButton} from '../components/BaseComponents/CustomButton';
import {CustomInput} from '../components/BaseComponents/CustomInput';

export const RecoveryPasswordScreen = () => {
  const [email, setemail] = useState('');
  return (
    <BaseScreen style={{justifyContent: 'center'}}>
      <Text
        style={{
          color: colores.plomo,
          fontSize: 20,
          marginBottom: '5%',
          maxWidth: 350,
          textAlign: 'justify',
        }}>
        Ingrese su correo electrónico, para poder generar una nueva contraseña
      </Text>
      <CustomInput
        placeholder={'Correo Electrónico'}
        defaultValue={email}
        keyboard={'email-address'}
        //color={colores.plomo}
        getValue={value => setemail(value)}></CustomInput>
      <View style={{height: 20, width: '100%'}}></View>
      <CustomButton
        onPress={() => {}}
        title={'RECUPERAR CUENTA'}></CustomButton>
    </BaseScreen>
  );
};
