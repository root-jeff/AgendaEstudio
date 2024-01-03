import React, {useContext, useEffect} from 'react';
import {Animated, StyleProp, View, ViewStyle} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';
interface Props {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  isScroll?: boolean;
}
export const BaseScreen = ({children, style = {}, isScroll = false}: Props) => {
  const {theme} = useContext(ThemeContext);
  const isFocused = useIsFocused();
  const {fadeIn, opacity} = useAnimation();
  useEffect(() => {
    fadeIn(500);
  }, [isFocused]);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Animated.View
        style={{
          opacity,
          flex: 1,
        }}>
        {isScroll ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
              padding: '2%',
              backgroundColor: theme.colors.background,
              ...(style as any),
            }}>
            {children}
          </ScrollView>
        ) : (
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              padding: '2%',
              backgroundColor: theme.colors.background,
              ...(style as any),
            }}>
            {children}
          </View>
        )}
      </Animated.View>
    </GestureHandlerRootView>
  );
};
