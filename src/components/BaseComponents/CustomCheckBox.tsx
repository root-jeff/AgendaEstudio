import React, {useEffect, useState} from 'react';
import {Checkbox} from 'react-native-paper';

interface Props {
  title: string;
  getValue: (value: boolean) => void;
  defaultValue?: boolean;
}

export const CustomCheckBox = ({
  title,
  getValue,
  defaultValue = false,
}: Props) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    getValue(value);
  }, [value]);
  return (
    <Checkbox.Item
      label={title}
      status={value ? 'checked' : 'unchecked'}
      onPress={() => setValue(!value)}
    />
  );
};
