import React from 'react';
import {Item} from '../../interfaces/DynamicQuestion';
import {CustomBoolean} from '../BaseComponents/CustomBoolean';
import {BaseMultiForm} from './BaseMultiForm';

interface Props {
  questionTitle: string;
  questionItems: Item<boolean>[];
  getValues: (value: Item<boolean>[]) => void;
  type: 'switch' | 'radiobutton';
  isSingleAnswer?: boolean;
}

export const MultiBooleanForm = ({
  questionTitle,
  questionItems,
  getValues,
  type,
  isSingleAnswer = false,
}: Props) => {
  const updateItemAnswer = (idItem: number, answer: boolean) => {
    getValues(
      questionItems.map(item =>
        item.idItem === idItem
          ? {
              ...item,
              answer,
            }
          : isSingleAnswer
            ? {...item, answer: false}
            : item,
      ),
    );
  };
  return (
    <BaseMultiForm questionTitle={questionTitle}>
      <></>
      {/*  {questionItems.map(
        ({idItem, itemName, answer}, index) =>
          ({
            radiobutton: (
              <CustomRadioBotton
                key={index}
                defaultValue={answer as boolean}
                placeholder={itemName}
                getValue={value =>
                  updateItemAnswer(idItem, value as boolean)
                }></CustomRadioBotton>
            ),
            switch: (
              <SwitchForm
                key={index}
                placeholder={itemName}
                defaultValue={answer as boolean}
                getValue={value =>
                  updateItemAnswer(idItem, value as boolean)
                }></SwitchForm>
            ),
          })[type],
      )} */}
    </BaseMultiForm>
  );
};
