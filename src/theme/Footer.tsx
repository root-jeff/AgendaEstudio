import React, {useContext} from 'react';
import {View} from 'react-native';
import {VersionApp} from '../helpers/VersionApp';
import {AuthContext} from '../context/AuthContext';
import {Info} from '../components/BaseComponents/Info';
import {ThemeContext} from '../context/ThemeContext';

export const Footer = () => {
  const {status} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.elevation.level2,
        paddingLeft: '4.5%',
        paddingRight: '1%',
      }}>
      <View
        style={{
          position: 'absolute',
          left: '1%',
          bottom: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        
      </View>
     
      {status === 'authenticated' && (
        <>
          <Info
            infoTextColor={theme.colors.onSurfaceVariant}
            property={'Usuario'}
            info={'acuenca'}></Info>
          <Info
            infoTextColor={theme.colors.onSurfaceVariant}
            property={'Patio'}
            info={'RFS 1'}></Info>
        </>
      )}
      <Info
        infoTextColor={theme.colors.onSurfaceVariant}
        property={'Versión'}
        info={VersionApp}></Info>
    </View>
  );
};
