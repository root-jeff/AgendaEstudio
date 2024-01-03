import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';

interface Props {
  questionTitle: string;
  children: JSX.Element | JSX.Element[];
}

export const BaseMultiForm = ({questionTitle, children}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        width: width * 0.8,
        margin: 10,
        padding: 10,
      }}>
      <Text>{questionTitle}</Text>
      {children}
    </View>
  );
};
