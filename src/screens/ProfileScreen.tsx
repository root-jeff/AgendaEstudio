import React, {useContext} from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

export const ProfileScreen = () => {
  const {
    /**Usuario de donde reciban */
  } = useContext(AuthContext);

  let usuario = 'AnuelBrrr';

  const ProfileAvatar = ({name}: {name: string}) => {
    const backgroundColor = (letras: string) => {
      const codigoLetra1 = letras.charCodeAt(0);
      const codigoLetra2 = letras.charCodeAt(1);

      const componenteRojo = ((codigoLetra1 * 17) % 156) + 100;
      const componenteVerde = ((codigoLetra2 * 23) % 156) + 100;
      const componenteAzul = ((codigoLetra1 + codigoLetra2) % 156) + 100;

      const colorHex = `#${componenteRojo.toString(
        16,
      )}${componenteVerde.toString(16)}${componenteAzul.toString(16)}`;

      return colorHex;
    };
    const letras = name.slice(0, 2).toUpperCase();

    return (
      <View style={{margin: 30}}>
        <Avatar.Text
          style={{backgroundColor: backgroundColor(letras)}}
          color="white"
          size={120}
          label={letras}
        />
      </View>
    );
  };

  /**
   * @description
   * En caso de tener más datos se puede establecer una variable de la siguiente manera:
   * const iniciales = `${profile?.first_name.slice(0,1,)}${profile?.last_name.slice(0, 1)}`;
   */

  return (
    <BaseScreen>
      <View
        style={{
          ...PerfilStyles.profileInfo,
        }}>
        <View>
          <ProfileAvatar name={usuario} />
        </View>
        <Text>
          Hola,{' '}
          <Text
            style={{
              color: '#333333',
              padding: 0,
            }}>
            {usuario}
          </Text>
        </Text>
      </View>
    </BaseScreen>
  );
};

const PerfilStyles = StyleSheet.create({
  profileInfo: {
    padding: 16,
    marginTop: 20,
    width: '90%',
  },
});
