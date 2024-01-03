import React from 'react';
import {Button} from 'react-native-paper';

interface Props {
  onPress: () => void;
  textColor?: string;
  title: string;
}

export const DialogButton = (props: Props) => {
  return <Button {...props}>{props?.title ?? ''}</Button>;
};
