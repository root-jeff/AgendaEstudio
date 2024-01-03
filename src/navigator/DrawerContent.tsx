import React, {useContext} from 'react';
import {icons} from '../theme/appTheme';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {
  Avatar,
  Drawer,
  Switch,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {ThemeContext} from '../context/ThemeContext';
import {
  CustomMenu,
  useCustomMenu,
} from '../components/BaseComponents/CustomMenu';

interface DrawerItem {
  icon: string;
  name: string;
  title: string;
  route: string;
}

const DrawerItems: DrawerItem[] = [
  {
    icon: icons.home,
    name: 'Inicio',
    title: '',
    route: 'TabNavigation',
  },
  {
    icon: 'pin',
    name: 'Next Screen',
    title: 'Next Screen',
    route: 'NextScreen',
  },
  {
    icon: icons.draw,
    name: 'Rayados',
    title: 'Rayados',
    route: 'RayadosScreen',
  },
  {
    icon: icons.viewList,
    name: 'Preguntas dinamicas',
    title: 'Preguntas dinamicas',
    route: 'DinamicQuestionsScreen',
  },
  {
    icon: icons.camera,
    name: 'Camara Dinamica',
    title: 'Camara Dinamica',
    route: 'DynamicCamera',
  },
  {
    icon: icons.account,
    name: 'Profile',
    title: 'Profile',
    route: 'ProfileScreen',
  },
];

export const DrawerContent = ({
  navigation,
  state,
}: DrawerContentComponentProps) => {
  const {theme, themeInfo, toggleTheme, getColorTheme, changeThemeColor} =
    useContext(ThemeContext);
  const {menuPosition, showMenu, hideMenu, isMenuVisible} = useCustomMenu();
  let username = 'React Native';

  const colorOptions = [
    {
      title: 'Cyan',
      onPress: () => changeThemeColor('cyan'),
      color: getColorTheme('cyan').primary,
      backgroundColor: getColorTheme('cyan').elevation.level5,
    },
    {
      title: 'Green',
      onPress: () => changeThemeColor('green'),
      color: getColorTheme('green').primary,
      backgroundColor: getColorTheme('green').elevation.level5,
    },
    {
      title: 'Yellow',
      onPress: () => changeThemeColor('yellow'),
      color: getColorTheme('yellow').primary,
      backgroundColor: getColorTheme('yellow').elevation.level5,
    },
    {
      title: 'Orange',
      onPress: () => changeThemeColor('orange'),
      color: getColorTheme('orange').primary,
      backgroundColor: getColorTheme('orange').elevation.level5,
    },
    {
      title: 'Red',
      onPress: () => changeThemeColor('red'),
      color: getColorTheme('red').primary,
      backgroundColor: getColorTheme('red').elevation.level5,
    },
    {
      title: 'Pink',
      onPress: () => changeThemeColor('pink'),
      color: getColorTheme('pink').primary,
      backgroundColor: getColorTheme('pink').elevation.level5,
    },
    {
      title: 'Purple',
      onPress: () => changeThemeColor('default'),
      color: getColorTheme('default').secondary,
      backgroundColor: getColorTheme('default').elevation.level5,
    },
    {
      title: 'Blue',
      onPress: () => changeThemeColor('blue'),
      color: getColorTheme('blue').primary,
      backgroundColor: getColorTheme('blue').elevation.level5,
    },
  ];

  return (
    <>
      <DrawerContentScrollView
        style={{
          backgroundColor: theme.colors.background,
          //...styles.sombra,
          //borderRadius: 0,
        }}>
        {/* Parte del avatar */}
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Avatar.Image
            size={90}
            source={require('../assets/logo.png')}
            style={{}}
          />
          <Text variant="labelSmall" style={{marginVertical: 10}}>
            Hola, <Text variant="labelLarge">{username}</Text>
          </Text>
        </View>
        {/* Opciones de menu */}
        <Drawer.Section>
          {DrawerItems.map(({route, title, name, icon}, index) => (
            <Drawer.Item
              key={index}
              onPress={() => navigation.navigate(route, {title})}
              label={name}
              icon={icon}
              active={
                state.routes.findIndex(e => e.name === route) === state.index
              }></Drawer.Item>
          ))}
        </Drawer.Section>
        <TouchableRipple onPress={() => toggleTheme()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 12,
              paddingHorizontal: 25,
            }}>
            <Text variant="labelLarge">Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={themeInfo.isDarkTheme} />
            </View>
          </View>
        </TouchableRipple>
        <Drawer.Item
          onPress={showMenu}
          label={'Change Theme Color'}
          icon={icons.palette}></Drawer.Item>
      </DrawerContentScrollView>
      <CustomMenu
        menuPosition={menuPosition}
        isVisible={isMenuVisible}
        onDismiss={hideMenu}
        menuItems={colorOptions}></CustomMenu>
    </>
  );
};
