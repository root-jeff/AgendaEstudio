import React from 'react';
import {Modal, StyleProp, View, ViewProps, ViewStyle} from 'react-native';

export interface BaseModalProps {
  CloseFunction: () => void;
  isVisible: boolean;
}

interface Props extends BaseModalProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  animationType?: 'none' | 'slide' | 'fade';
  isAlert?: boolean;
}

export const BaseModal = ({
  children,
  style,
  CloseFunction,
  isVisible = false,
  animationType = 'slide',
  isAlert = false,
}: Props) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType={animationType}
      onRequestClose={() => (isAlert ? {} : CloseFunction())}>
      <View
        style={{
          ...(style as any),
        }}>
        {children}
      </View>
    </Modal>
  );
};
