import React, {useContext} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {sleep} from '../helpers/sleep';
import {Loader} from '../utils/Loader/Loader';
import {Appbar} from 'react-native-paper';
import {Image} from 'react-native';
import {
  CustomMenu,
  useCustomMenu,
} from '../components/BaseComponents/CustomMenu';
import {icons} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import {Alert} from '../utils/Dialog/Alert/Alert';

interface Props {
  title?: string;
}

export const DrawerHeader = ({title = ''}: Props) => {
  const {logOut} = useContext(AuthContext);
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const {menuPosition, showMenu, hideMenu, isMenuVisible} = useCustomMenu();

  const logout = () => {
    Alert.show('yesno', {
      title: 'Aviso',
      message: '¿Desea cerrar sesión?',
      onPress: logOut,
    });
  };
  const Catalogos = async () => {
    Loader.show();
    await sleep(2).then(Loader.hide);
  };

  return (
    <>
      <Appbar.Header style={{justifyContent: 'space-between'}} elevated>
        <Appbar.Action
          icon={icons.menu}
          onPress={() => navigation.openDrawer()}
        />
        {title.length === 0 ? (
          <Image
            source={require('../assets/banner.png')}
            style={{
              height: '75%',
              width: '50%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}></Image>
        ) : (
          <Appbar.Content title="Title" titleStyle={{textAlign: 'center'}} />
        )}
        <Appbar.Action icon={'dots-vertical'} onPressIn={showMenu} />
      </Appbar.Header>
      <CustomMenu
        menuPosition={menuPosition}
        isVisible={isMenuVisible}
        onDismiss={hideMenu}
        menuItems={[
          {
            leadingIcon: icons.reload,
            onPress: Catalogos,
            title: 'Actualizar Catálogos',
          },
          {
            leadingIcon: icons.logout,
            onPress: () => logout(),
            title: 'Cerrar Sesión',
          },
        ]}></CustomMenu>
    </>
  );
};
