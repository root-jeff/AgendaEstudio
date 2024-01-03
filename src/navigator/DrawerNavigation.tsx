import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerHeader} from './DrawerHeader';
import {NextScreen} from '../screens/NextScreen';
import {TabNavigation} from './TabNavigation';
import {RayadosScreen} from '../screens/RayadosScreen';
import {DinamicQuestionsScreen} from '../screens/DinamicQuestionsScreen';
import {DynamicCamera} from '../screens/DynamicCamera';
import {ProfileScreen} from '../screens/ProfileScreen';
import {DrawerContent} from './DrawerContent';

const Drawer = createDrawerNavigator();

const drawerItems = [
  {name: 'TabNavigation', component: TabNavigation},
  {name: 'NextScreen', component: NextScreen},
  {name: 'TabNaRayadosScreenvigation', component: RayadosScreen},
  {name: 'RayadosScreen', component: RayadosScreen},
  {name: 'DinamicQuestionsScreen', component: DinamicQuestionsScreen},
  {name: 'ProfileScreen', component: ProfileScreen},
  {name: 'DynamicCamera', component: DynamicCamera},
];

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      defaultStatus="open"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        header: ({route: {params}}: any) => (
          <DrawerHeader
            title={params !== undefined ? params.title : ''}></DrawerHeader>
        ),
      }}>
      {drawerItems.map((props, index) => (
        <Drawer.Screen key={index} {...props} />
      ))}
    </Drawer.Navigator>
  );
};

//#region Menu Interno

//#endregion
