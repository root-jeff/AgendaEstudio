import React, {useContext} from 'react';
import {Button} from 'react-native-paper';
import {ThemeContext} from '../../context/ThemeContext';
import {StyleProp, ViewStyle} from 'react-native';

interface Props {
  onPress: (() => void) | (() => Promise<void>);
  title: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  type?: 'contained' | 'text' | 'outlined' | 'contained-tonal';
  loading?: boolean;
  fontWeight?: 'normal' | 'bold';
  style?: StyleProp<ViewStyle>;
}

export const CustomButton = ({
  onPress,
  title,
  icon,
  iconPosition = 'left',
  type = 'contained',
  loading = false,
  fontWeight = 'normal',
  style,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Button
      textColor={type === 'text' ? theme.colors.secondary : undefined}
      icon={icon}
      mode={type}
      onPress={onPress}
      style={{margin: 5, ...(style as any)}}
      loading={loading}
      contentStyle={{
        flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
      }}>
      {title}
    </Button>
  );
};
