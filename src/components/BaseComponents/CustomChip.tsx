import React from 'react';
import {Chip} from 'react-native-paper';

interface Props {
  selected?: boolean;
  onPress: () => void;
  title: string;
  icon?: string;
}

export const CustomChip = (props: Props) => {
  return (
    <Chip style={{height: 30, margin: 5}} {...props} showSelectedOverlay>
      {props.title}
    </Chip>
  );
};
