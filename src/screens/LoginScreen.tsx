import React, {useContext} from 'react';
import {View, Keyboard, Image, useWindowDimensions} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';
import {CustomButton} from '../components/BaseComponents/CustomButton';
import {BaseScreen} from '../Template/BaseScreen';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Background} from './Background';
import {CustomInput} from '../components/BaseComponents/CustomInput';
import {Text} from 'react-native-paper';

let user = '';
let pass = '';

if (__DEV__) {
  user = 'geo@smoke.com';
  pass = 'Smoke123*+';
}

export const LoginScreen = () => {
  const {signIn} = useContext(AuthContext);
  const navigation = useNavigation();

  const {username, password, onChange} = useForm({
    username: user,
    password: pass,
  });

  const Login = async () => {
    Keyboard.dismiss();
    await signIn({username, password});
  };

  return (
    <BaseScreen style={{justifyContent: 'center'}}>
      <Image
        source={require('../assets/logo.png')}
        style={{
          height: '30%',
          width: '80%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}></Image>
      <Text variant="headlineLarge" style={{}}>
        Proyecto Base React Native
      </Text>
      <CustomInput
        placeholder={'Usuario'}
        defaultValue={username}
        keyboardType={'email-address'}
        errorCondition={username.length === 0}
        errorMessage="Debe ingresar un correo válido"
        getValue={value => onChange(value, 'username')}></CustomInput>
      <CustomInput
        placeholder={'Contraseña'}
        secureTextEntry={true}
        defaultValue={password}
        getValue={value => onChange(value, 'password')}></CustomInput>
      <CustomButton
        fontWeight="bold"
        onPress={() => Login()}
        title={'Iniciar Sesión'}></CustomButton>
      <View
        style={{
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <CustomButton
          type="text"
          fontWeight="normal"
          title={'¿No tienes cuenta? ¡Registrate!'}
          onPress={() =>
            navigation.dispatch(CommonActions.navigate('RegisterScreen'))
          }></CustomButton>
        <CustomButton
          type="text"
          fontWeight="normal"
          title={'Recuperar cuenta'}
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate('RecoveryPasswordScreen'),
            )
          }></CustomButton>
      </View>
      <Background></Background>
    </BaseScreen>
  );
};
