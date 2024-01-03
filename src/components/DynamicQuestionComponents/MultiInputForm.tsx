import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import {CustomInput} from '../BaseComponents/CustomInput';
import {Item} from '../../interfaces/DynamicQuestion';
import {BaseMultiForm} from './BaseMultiForm';

interface Props {
  questionTitle: string;
  questionItems: Item<string>[];
  inputType: 'text' | 'number';
  getValues: (value: Item<string>[]) => void;
}

export const MultiInputForm = ({
  questionTitle,
  questionItems,
  inputType,
  getValues,
}: Props) => {
  const getKeyboardType = (): KeyboardTypeOptions =>
    ({
      text: 'default' as KeyboardTypeOptions,
      number: 'number-pad' as KeyboardTypeOptions,
    })[inputType] || ('default' as KeyboardTypeOptions);

  const updateItemAnswer = (idItem: number, answer: string) => {
    getValues(
      questionItems.map(item =>
        item.idItem === idItem
          ? {
              ...item,
              answer,
            }
          : item,
      ),
    );
  };

  return (
    <BaseMultiForm questionTitle={questionTitle}>
      {questionItems.map(({idItem, itemName, answer}, index) => (
        <>
          {/*  <CustomInput
          keyboard={getKeyboardType()}
          key={index}
          defaultValue={answer}
          placeholder={itemName}
          getValue={value => updateItemAnswer(idItem, value as string)}
          width={'100%'}></CustomInput> */}
        </>
      ))}
    </BaseMultiForm>
  );
};
