import React, {useState} from 'react';
import {CustomSearchInput} from './CustomSearchInput';
import {CustomList, ListProps} from './CustomList';
import {Filters, PropertyConfig} from './Filters';

interface Props<T> extends ListProps<T> {
  placeholder?: string;
  textCompare?: (item: T) => string[];
  filters?: PropertyConfig<T>[];
}

export const SearchListFilter = <T extends unknown>({
  data,
  renderItem,
  ListEmptyText,
  refreshFunction,
  numColumns = 1,
  isHorizontal = false,
  loadMore,
  placeholder,
  textCompare = () => [],
  filters = [],
}: Props<T>) => {
  const [result, setResult] = useState(data);

  return (
    <>
      <CustomSearchInput
        placeholder={placeholder ?? ''}
        catalog={result}
        textCompare={textCompare}
        result={setResult}
      />
      {filters.length !== 0 && (
        <Filters filters={filters} data={data} result={setResult} />
      )}
      <CustomList
        data={result}
        renderItem={renderItem}
        ListEmptyText={ListEmptyText}
        refreshFunction={refreshFunction}
        numColumns={numColumns}
        isHorizontal={isHorizontal}
        loadMore={loadMore}
      />
    </>
  );
};
