import React from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {Text} from 'react-native';
import {colores} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomButton} from '../components/BaseComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {CustomInput} from '../components/BaseComponents/CustomInput';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const {
    Nombres,
    Apellidos,
    Identificacion,
    Telefono,
    Email,
    Password,
    CheckPassword,
    onChange,
  } = useForm({
    Nombres: '',
    Apellidos: '',
    Identificacion: '',
    Telefono: '',
    Email: '',
    Password: '',
    CheckPassword: '',
  });
  return (
    <BaseScreen isScroll={true} style={{justifyContent: 'center'}}>
      <Text style={{color: colores.plomo, fontSize: 22, marginBottom: '10%'}}>
        ¡Regístrese!
      </Text>
      <CustomInput
        placeholder={'Nombres'}
        defaultValue={Nombres}
        keyboard={'email-address'}
        color={colores.plomo}
        onChange={value => onChange(value, 'Nombres')}></CustomInput>
      <CustomInput
        color={colores.plomo}
        placeholder={'Apellidos'}
        securetextentry={true}
        defaultValue={Apellidos}
        onChange={value => onChange(value, 'Apellidos')}></CustomInput>
      <CustomButton
        color={colores.secundario}
        onPress={() => {}}
        title={'TOMAR FOTO DE PERFIL'}></CustomButton>
      <CustomInput
        color={colores.plomo}
        placeholder={'Identificación'}
        securetextentry={true}
        defaultValue={Identificacion}
        onChange={value => onChange(value, 'Identificacion')}></CustomInput>
      <CustomInput
        color={colores.plomo}
        placeholder={'Número de teléfono'}
        securetextentry={true}
        defaultValue={Telefono}
        onChange={value => onChange(value, 'Telefono')}></CustomInput>
      <CustomInput
        color={colores.plomo}
        placeholder={'Email'}
        securetextentry={true}
        defaultValue={Email}
        onChange={value => onChange(value, 'Email')}></CustomInput>
      <CustomInput
        color={colores.plomo}
        placeholder={'Contraseña'}
        securetextentry={true}
        defaultValue={Password}
        onChange={value => onChange(value, 'Password')}></CustomInput>
      <CustomInput
        color={colores.plomo}
        placeholder={'Confirmar Contraseña'}
        securetextentry={true}
        defaultValue={CheckPassword}
        onChange={value => onChange(value, 'CheckPassword')}></CustomInput>
      <CustomButton
        onPress={() => {}}
        title={'REGISTRAR CUENTA'}></CustomButton>
      <CustomButton
        onPress={() => navigation.goBack()}
        title={'REGRESAR'}></CustomButton>
    </BaseScreen>
  );
};
