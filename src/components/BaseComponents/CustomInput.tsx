import React, {useContext, useEffect, useState} from 'react';
import {KeyboardTypeOptions, StyleProp, View, ViewStyle} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {icons} from '../../theme/appTheme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  color?: string;
  defaultValue?: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  placeholder?: string;
  getValue: (value: string) => void;
  showTextLength?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  onIconPress?: () => void;
  errorCondition?: boolean;
  errorMessage?: string;
  multilne?: boolean;
}

export const CustomInput = ({
  placeholder,
  editable = true,
  keyboardType = 'default',
  maxLength = 100,
  secureTextEntry = false,
  showTextLength = false,
  style,
  icon = '',
  errorCondition,
  multilne = false,
  errorMessage,
  getValue,
  defaultValue = '',
  onIconPress = () => {},
  iconPosition = 'left',
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [isPasswordSecure, setisPasswordSecure] = useState(secureTextEntry);
  const [value, setvalue] = useState(defaultValue);
  useEffect(() => {
    getValue(value);
  }, [value]);

  return (
    <View style={{marginVertical: 5, width: '100%'}}>
      <TextInput
        maxLength={maxLength}
        keyboardType={keyboardType}
        editable={editable}
        multiline={multilne}
        style={{
          backgroundColor: theme.colors.elevation.level2,
          ...(style as any),
        }}
        mode="outlined"
        theme={{roundness: 25}}
        label={placeholder}
        value={value}
        onChangeText={setvalue}
        secureTextEntry={isPasswordSecure}
        outlineColor="transparent"
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={isPasswordSecure ? icons.eyeOpen : icons.eyeClose}
              onPress={() => setisPasswordSecure(!isPasswordSecure)}
              forceTextInputFocus={false}
            />
          ) : showTextLength ? (
            <TextInput.Affix text={`10/${maxLength}`} />
          ) : icon.length !== 0 ? (
            <TextInput.Icon
              icon={icon}
              forceTextInputFocus={false}
              onPress={onIconPress}
            />
          ) : (
            <></>
          )
        }
        left={
          icon.length !== 0 && iconPosition === 'left' ? (
            <TextInput.Icon
              icon={icon}
              forceTextInputFocus={false}
              onPress={onIconPress}
            />
          ) : undefined
        }
      />
      {errorCondition ? (
        <HelperText type="error" padding="normal" visible={true}>
          {errorMessage}
        </HelperText>
      ) : (
        <></>
      )}
    </View>
  );
};
