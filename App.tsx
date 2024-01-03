import React from 'react';
import {PermissionsProvider} from './src/context/PermissionsContext';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {MapProvider} from './src/context/MapContext';
import {LoaderManager} from './src/utils/Loader/Loader';
import {Footer} from './src/theme/Footer';
import {ThemeProvider} from './src/context/ThemeContext';
import {AlertManager} from './src/utils/Dialog/Alert/Alert';
import {DocumentManager} from './src/utils/Dialog/Document/Document';
import { AuthProvider } from './src/context/AuthContext';

/* const fontConfig = Platform.select<any>({
  web: {
    regular: {
      fontFamily: 'Klavika-Regular',
      fontWeight: '500',
    },
    medium: {
      fontFamily: 'Klavika-Medium',
      fontWeight: '600',
    },
    light: {
      fontFamily: 'Klavika-Light',
      fontWeight: '400',
    },
    thin: {
      fontFamily: 'Klavika-Light', // O ajusta según tus necesidades
      fontWeight: '400',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Klavika-Regular',
      fontWeight: '500',
    },
    medium: {
      fontFamily: 'Klavika-Medium',
      fontWeight: '600',
    },
    light: {
      fontFamily: 'Klavika-Light',
      fontWeight: '400',
    },
    thin: {
      fontFamily: 'Klavika-Light', // O ajusta según tus necesidades
      fontWeight: '100',
    },
  },
  android: {
    regular: {
      fontFamily: 'Klavika-Regular',
      fontWeight: '500',
    },
    medium: {
      fontFamily: 'Klavika-Medium',
      fontWeight: '600',
    },
    light: {
      fontFamily: 'Klavika-Light',
      fontWeight: '400',
    },
    thin: {
      fontFamily: 'Klavika-Light', // O ajusta según tus necesidades
      fontWeight: '100',
    },
  },
  default: {
    regular: {
      fontFamily: 'Klavika-Regular',
      fontWeight: '500',
    },
    medium: {
      fontFamily: 'Klavika-Medium',
      fontWeight: '600',
    },
    light: {
      fontFamily: 'Klavika-Light',
      fontWeight: '400',
    },
    thin: {
      fontFamily: 'Klavika-Light', // O ajusta según tus necesidades
      fontWeight: '100',
    },
  },
});
 */
//#region AppState

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <ThemeProvider>
     
        <PermissionsProvider>
          <MapProvider>
            <AuthProvider>
              {children}
              </AuthProvider>
          </MapProvider>
        </PermissionsProvider>
     
    </ThemeProvider>
  );
};

//#endregion

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      <AlertManager />
      <DocumentManager />
      <LoaderManager />
      <Footer />
    </AppState>
  );
};

export default App;
