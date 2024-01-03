import React, {useEffect, useState} from 'react';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';
import {Searchbar} from 'react-native-paper';

export interface SearchInputProps<T extends unknown> {
  placeholder: string;
  catalog: T[];
  textCompare: (item: T) => string[];
  result: (filteredItems: T[]) => void;
}

export const CustomSearchInput = <T extends unknown>({
  placeholder,
  catalog,
  textCompare,
  result,
}: SearchInputProps<T>) => {
  const [textValue, setTextValue] = useState('');
  const deboncedValue = useDebouncedValue(textValue);
  const filterItems = () => {
    if (deboncedValue.length < 3) {
      return result(catalog);
    }
    result(
      catalog.filter(item =>
        deboncedValue
          .trim()
          .toLowerCase()
          .split(/\s+/) // Divide la consulta en palabras clave
          .every(keyword =>
            textCompare(item).some(t =>
              t.trim().toLowerCase().includes(keyword),
            ),
          ),
      ),
    );
  };

  useEffect(() => {
    filterItems();
  }, [deboncedValue]);

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={setTextValue}
      value={textValue}
    />
  );
};
