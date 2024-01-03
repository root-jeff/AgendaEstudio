import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {NextScreen} from '../screens/NextScreen';
import {icons} from '../theme/appTheme';
import {BottomNavigation, Icon} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import {ComponentsExample} from '../screens/ComponentsExample';

interface TabItem {
  name: string;
  title: string;
  icon: string;
  component: () => React.JSX.Element;
}

const tabItems: TabItem[] = [
  {
    name: 'HomeScreen',
    title: 'Inicio',
    icon: icons.home,
    component: HomeScreen,
  },
  {
    name: 'NextScreen',
    title: 'Busqueda',
    icon: icons.search,
    component: NextScreen,
  },
  {
    name: 'Next2Screen',
    title: 'Favoritos',
    icon: icons.heart,
    component: ComponentsExample,
  },
  {
    name: 'Next3Screen',
    title: 'Perfil',
    icon: icons.account,
    component: NextScreen,
  },
];
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) =>
            descriptors[route.key].options.tabBarIcon?.({
              focused,
              color,
              size: 24,
            }) || null
          }
          getLabelText={({route}) => descriptors[route.key].options.title}
        />
      )}
      screenOptions={{
        headerShown: false,
        //tabBarStyle: {marginBottom: '5%'},
      }}>
      {tabItems.map(({name, title, icon, component}, index) => (
        <Tab.Screen
          key={index}
          name={name}
          options={{
            title,
            tabBarIcon: props => <Icon source={icon} {...props} />,
          }}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
};
