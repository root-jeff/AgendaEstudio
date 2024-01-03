import React, {useContext, useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {DateTypes, formatDate} from '../../helpers/DateTimeFormat';
import {CustomInput} from './CustomInput';
import {icons} from '../../theme/appTheme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  defaultValue: string;
  getValue: (value: string) => void;
  type?: DateTypes;
  placeholder: string;
}

export const CustomDateTimePicker = ({
  defaultValue,
  getValue,
  type = 'datetime',
  placeholder,
}: Props) => {
  const {themeInfo} = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [value, setvalue] = useState(defaultValue);
  useEffect(() => {
    getValue(formatDate(value, type));
  }, [value]);
  return (
    <>
      <CustomInput
        placeholder={value.length > 0 ? formatDate(value, type) : placeholder}
        getValue={() => {}}
        editable={false}
        icon={icons.calendar}
        onIconPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        locale="es"
        confirmText="Confirmar"
        cancelText="Cancelar"
        title={'Seleccionar Fecha'}
        mode={type}
        open={open}
        date={value === '' ? new Date() : new Date(value)}
        onConfirm={date => {
          setOpen(false);
          setvalue(date.toString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
        theme={themeInfo.isDarkTheme ? 'dark' : 'light'}
      />
    </>
  );
};
