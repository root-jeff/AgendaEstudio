import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

export interface TableColumn<T> {
  key: keyof T;
  title: string;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  scrollable?: boolean;
}

{
  /**
@FormaDeUsar

  const tableData = [
    {id: 1, name: 'John Doe', age: 30},
    {id: 2, name: 'Jane Doe', age: 25},
    // ... Puedes agregar más filas según sea necesario
  ];

  const tableColumns: TableColumn<TecnicoMarca>[] = [
    {key: 'marca', title: 'Marca'},
  ];
  <DynamicTable data={tmarca} columns={tableColumns} /> 

*/
}

export const DynamicTable = <T,>({
  data,
  columns,
  scrollable = true,
}: TableProps<T>) => {
  const {width} = useWindowDimensions();
  const renderHeader = () => (
    <View style={tableStyles.headerRow}>
      {columns.map((column, index) => (
        <View
          key={column.key.toString()}
          style={[
            tableStyles.headerCell,
            {width: width / 3},
            index < columns.length - 1 && tableStyles.cellSeparator,
          ]}>
          <Text style={{}}>{column.title}</Text>
        </View>
      ))}
    </View>
  );

  const renderRow = (rowData: T, index: number) => (
    <View key={index} style={tableStyles.row}>
      {columns.map((column, columnIndex) => (
        <View
          key={column.key.toString()}
          style={[
            tableStyles.cell,
            {width: width / 3},

            columnIndex < columns.length - 1 && tableStyles.cellSeparator,
          ]}>
          <Text style={{}}>{rowData[column.key] as React.ReactNode}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView horizontal={scrollable} showsHorizontalScrollIndicator={false}>
      <View style={tableStyles.table}>
        {renderHeader()}
        {data.map((row, index) => renderRow(row, index))}
      </View>
    </ScrollView>
  );
};

const tableStyles = StyleSheet.create({
  table: {
    flexDirection: 'column',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
  },
  cell: {
    flex: 1,
  },
  cellSeparator: {
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
});
