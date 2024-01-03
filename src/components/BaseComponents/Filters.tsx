// Filters.tsx
import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {CustomChip} from './CustomChip';
import {icons} from '../../theme/appTheme';

export type PropertyConfig<T> = {
  name: string;
  property: keyof T;
};

interface Props<T> {
  data: T[];
  result: (results: T[]) => void;
  filters: PropertyConfig<T>[];
}

export const Filters = <T extends unknown>({
  filters,
  data,
  result,
}: Props<T>) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  const handleFilterSelection = (filterName: string, filterValue: string) => {
    setSelectedFilters(prev => {
      if (prev[filterName] === filterValue) {
        const {[filterName]: removedFilter, ...rest} = prev;
        return rest;
      } else {
        return {...prev, [filterName]: filterValue};
      }
    });
  };

  const getUniqueFilterValues = (items: T[], property: keyof T): string[] => {
    return Array.from(new Set(items.map(item => String(item[property]))));
  };

  useEffect(() => {
    let filteredData = data;
    filters.forEach(property => {
      const filterValue = selectedFilters[property.name];
      if (filterValue) {
        filteredData = filteredData.filter(
          item => String(item[property.property]) === filterValue,
        );
      }
    });
    result(filteredData);
  }, [selectedFilters]);

  return (
    <>
      {filters.length !== 0 && (
        <CustomChip
          onPress={() => setShowFilters(!showFilters)}
          title={`${showFilters ? 'Ocultar' : 'Mostrar'} Filtros`}
          selected={showFilters}
          icon={icons.filter}
        />
      )}
      {showFilters && (
        <View
          //bounces={true}
          style={{marginVertical: 5, width: '100%', alignItems: 'center'}}
          /* contentContainerStyle={{
            alignItems: 'center',
          }} */
        >
          {filters.map((property, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text variant="bodyLarge" style={{marginRight: 10}}>
                {property.name}
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{flexGrow: 1}}>
                {getUniqueFilterValues(data, property.property).map(
                  (value, indexFilter) => (
                    <CustomChip
                      key={indexFilter}
                      onPress={() =>
                        handleFilterSelection(property.name, value)
                      }
                      title={value}
                      selected={selectedFilters[property.name] === value}
                    />
                  ),
                )}
              </ScrollView>
            </View>
          ))}
        </View>
      )}
    </>
  );
};
