import React from 'react';
import {ScrollView} from 'react-native';
import {Dialog, Portal, Text} from 'react-native-paper';
export interface BaseDialogProps {
  visible: boolean;
  onDismiss: () => void;
  title: string;
  message: string;
  icon?: string;
  iconColor?: string;
  dismissable?: boolean;
}

interface Props extends BaseDialogProps {
  children?: JSX.Element | JSX.Element[];
  buttonsChilren?: JSX.Element | JSX.Element[];
}

export const DialogBase = ({
  visible,
  onDismiss,
  children,
  buttonsChilren,
  title,
  message = '',
  icon = '',
  iconColor,
  dismissable = false,
}: Props) => {
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={onDismiss}
        dismissable={dismissable}
        style={{maxHeight: '90%'}}>
        {icon.length > 0 && <Dialog.Icon icon={icon} color={iconColor} />}
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.ScrollArea style={{borderColor: 'transparent', flexGrow: 1}}>
          {message.length > 0 && <Text variant="bodyMedium">{message}</Text>}
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            {children}
          </ScrollView>
        </Dialog.ScrollArea>
        {buttonsChilren}
      </Dialog>
    </Portal>
  );
};
