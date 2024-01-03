import React from 'react';
import {DialogBase, BaseDialogProps} from '../DialogComponents/DialogBase';
import {Dialog} from 'react-native-paper';
import {DialogButton} from '../DialogComponents/DialogButton';
import {CustomInput} from '../../../components/BaseComponents/CustomInput';

interface Props extends BaseDialogProps {
  onPress?: () => void;
  onChangeText: (value: string) => void;
  placeholder?: string;
}

export const AlertPromt = ({
  visible,
  onDismiss,
  title,
  message,
  icon,
  iconColor,
  onPress = () => {},
  onChangeText,
  placeholder = '',
}: Props) => {
  return (
    <DialogBase
      visible={visible}
      onDismiss={onDismiss}
      title={title}
      message={message}
      icon={icon}
      iconColor={iconColor}
      children={
        <CustomInput
          placeholder={placeholder}
          getValue={onChangeText}></CustomInput>
      }
      buttonsChilren={
        <Dialog.Actions>
          <DialogButton
            onPress={() => {
              onPress();
              onDismiss();
            }}
            title={'Ok'}></DialogButton>
          <DialogButton onPress={onDismiss} title={'Cancelar'}></DialogButton>
        </Dialog.Actions>
      }></DialogBase>
  );
};
