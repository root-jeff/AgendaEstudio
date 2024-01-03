import React from 'react';
import {DialogBase, BaseDialogProps} from '../DialogComponents/DialogBase';
import {Dialog} from 'react-native-paper';
import {DialogButton} from '../DialogComponents/DialogButton';
import {Image} from 'react-native';

interface Props extends BaseDialogProps {
  onPress?: () => void;
  imagePath: string;
}

export const AlertImage = ({
  visible,
  onDismiss,
  title,
  message,
  icon,
  iconColor,
  imagePath,
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
      children={
        <Image
          source={{
            uri: imagePath,
          }}
          style={{
            aspectRatio: 1,
            resizeMode: 'contain',
          }}></Image>
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
