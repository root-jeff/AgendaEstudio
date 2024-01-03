import React, {useEffect, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Checkbox, RadioButton, Switch, Text} from 'react-native-paper';

interface Props {
  title: string;
  getValue: (value: boolean) => void;
  defaultValue?: boolean;
  type?: 'RadioButton' | 'Switch';
}

export const CustomBoolean = ({
  title,
  getValue,
  defaultValue = false,
  type = 'RadioButton',
}: Props) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    getValue(value);
  }, [value]);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        width: '100%',
      }}>
      <Text>{title}</Text>
      {{
        RadioButton: (
          <RadioButton
            value={value ? 'checked' : 'uncheked'}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => {
              setValue(!value);
            }}
          />
        ),
        Switch: <Switch value={value} onValueChange={setValue} />,
      }[type] || <></>}
    </View>
  );
};
