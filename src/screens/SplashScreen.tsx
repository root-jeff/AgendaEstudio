import React, {useEffect} from 'react';
import {Animated, Image, View} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import {useIsFocused} from '@react-navigation/native';
import {useAnimation} from '../hooks/useAnimation';

export const SplashScreen = () => {
  const isFocused = useIsFocused();
  const {fadeIn, opacity, zoomAndFadeOut, scale, position} = useAnimation();
  const handleZoomAndFadeOut = () => {
    fadeIn(1000); // Hace un fade-in con una duración de 500 ms
    setTimeout(() => {
      zoomAndFadeOut(5, 1800); // Después de 1000 ms (1 segundo), aplica el zoom y fade-out
    }, 2000);
  };
  useEffect(() => {
    handleZoomAndFadeOut();
  }, [isFocused]);
  return (
    <View
      style={{
        flex: 1,
        ...styles.centerItems,
        backgroundColor: colores.primario,
      }}>
      <Animated.Image
        source={require('../assets/splash.png')}
        style={{
          opacity,
          transform: [{translateY: position}, {scale}],
          height: '50%',
          width: '50%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}></Animated.Image>
    </View>
  );
};
