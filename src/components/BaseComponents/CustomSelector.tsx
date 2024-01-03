import React, {useContext, useEffect, useState} from 'react';
import {
  MultipleSelectList,
  SelectList,
} from 'react-native-dropdown-select-list';
import {ThemeContext} from '../../context/ThemeContext';
import {Icon} from 'react-native-paper';
import {icons} from '../../theme/appTheme';

interface Props<T> {
  catalog: T[];
  type: 'single' | 'multiple';
  getResult: (result: T | T[]) => void;
  defaultValue?: T;
  keyProperty: keyof T;
}

interface Item {
  key: string;
  value: string;
  disabled?: boolean;
}

export const CustomSelector = <T extends Record<string, any>>({
  type,
  getResult,
  catalog,
  defaultValue,
  keyProperty,
}: Props<T>) => {
  const {theme} = useContext(ThemeContext);
  const [items, setItems] = useState<Item[]>([]);
  const [selected, setselected] = useState<string[]>([]);

  useEffect(() => {
    setItems(
      catalog.map((item, index) => ({
        key: index.toString(),
        value: item[keyProperty].toString(),
      })),
    );
  }, [catalog, keyProperty]);

  const handleResult = (selected: string | string[]) => {
    const selectedValues = Array.isArray(selected) ? selected : [selected];
    const result = catalog.filter(item =>
      selectedValues.includes(item[keyProperty].toString()),
    );
    getResult(type === 'single' ? result[0] : result);
  };

  /*   useEffect(() => {
    // Setear el valor predeterminado solo si es un selector único
    if (type === 'single' && defaultValue) {
      const defaultItem = items.find(
        item => item.value === (defaultValue as T)[keyProperty].toString(),
      );
      handleResult(defaultItem?.key || items[0]?.key);
    }
  }, [defaultValue, type, keyProperty, items]); */

  const fontStyle = {
    ...theme.fonts.bodyLarge,
    color: theme.colors.onSurfaceVariant,
  };

  useEffect(() => {
    console.log('defaultitem', defaultValue);
    console.log(
      'default ',
      items.find(
        item =>
          item.key.trim() ===
          (defaultValue as T)?.[keyProperty].toString().trim(),
      ),
    );
  }, []);

  return (
    <>
      {type === 'single' ? (
        <SelectList
          data={items}
          boxStyles={{
            width: '100%',
            borderColor: 'transparent',
            backgroundColor: theme.colors.elevation.level2,
            borderRadius: 25,
            margin: 5,
          }}
          searchPlaceholder={'buscar'}
          arrowicon={<Icon size={25} source={icons.down} />}
          searchicon={<Icon size={25} source={icons.search} />}
          closeicon={<Icon size={25} source={icons.close} />}
          inputStyles={fontStyle}
          dropdownTextStyles={fontStyle}
          dropdownStyles={{borderColor: theme.colors.elevation.level2}}
          disabledTextStyles={fontStyle}
          disabledItemStyles={{
            backgroundColor: theme.colors.elevation.level2,
          }}
          setSelected={(val: string) => {
            console.log('selector string ', val);
            handleResult(val);
          }}
          placeholder="seleccionar"
          save="value"
          defaultOption={items.find(
            item => item.key === (defaultValue as T)?.[keyProperty].toString(),
          )}
        />
      ) : (
        <MultipleSelectList
          data={items}
          boxStyles={{
            width: '100%',
            minWidth: '100%',
            borderColor: 'transparent',
            backgroundColor: theme.colors.elevation.level2,
            borderRadius: 25,
            margin: 5,
          }}
          arrowicon={<Icon size={25} source={icons.down} />}
          searchicon={<Icon size={25} source={icons.search} />}
          closeicon={<Icon size={25} source={icons.close} />}
          inputStyles={fontStyle}
          dropdownTextStyles={fontStyle}
          dropdownStyles={{borderColor: theme.colors.elevation.level2}}
          disabledTextStyles={fontStyle}
          disabledItemStyles={{
            backgroundColor: theme.colors.elevation.level2,
          }}
          checkBoxStyles={{backgroundColor: theme.colors.onSurfaceVariant}}
          labelStyles={fontStyle}
          badgeStyles={{backgroundColor: theme.colors.onSurfaceVariant}}
          badgeTextStyles={{...fontStyle, backgroundColor: theme.colors.surface}}
          setSelected={setselected}
          onSelect={() => {
            console.log(selected), handleResult(selected);
          }}
          fontFamily="Klavika-Regular"
          save="value"
          label={'Seleccionados'}
        />
      )}
    </>
  );
};
