import React from 'react';
import {DialogBase, BaseDialogProps} from '../DialogComponents/DialogBase';
import {Dialog} from 'react-native-paper';
import {DialogButton} from '../DialogComponents/DialogButton';

interface Props extends BaseDialogProps {
  onPress?: () => void;
}

export const AlertYesNo = ({
  visible,
  onDismiss,
  title,
  message,
  icon,
  iconColor,
  onPress = () => {},
}: Props) => {
  return (
    <DialogBase
      visible={visible}
      onDismiss={onDismiss}
      title={title}
      message={message}
      icon={icon}
      iconColor={iconColor}
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
