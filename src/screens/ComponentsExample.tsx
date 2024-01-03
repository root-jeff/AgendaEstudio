import React, {useRef, useState} from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {CustomBoolean} from '../components/BaseComponents/CustomBoolean';
import {CustomCheckBox} from '../components/BaseComponents/CustomCheckBox';
import {CustomDateTimePicker} from '../components/BaseComponents/CustomDateTimePicker';
import {AnimatedFAB, FAB, Snackbar, Surface, Text} from 'react-native-paper';

import {CustomSelector} from '../components/BaseComponents/CustomSelector';

export const ComponentsExample = () => {
  const items = [
    {
      id: 1,
      name: 'Item1',
    },
    {
      id: 2,
      name: 'Item2',
    },
    {
      id: 3,
      name: 'Item4',
    },
  ];

  return (
    <BaseScreen isScroll={true}>
      <CustomSelector
        catalog={items}
        type={'single'}
        getResult={value => console.log('selector single', value)}
        keyProperty={'name'}
        defaultValue={items[2]}></CustomSelector>
      <CustomSelector
        catalog={items}
        type={'multiple'}
        getResult={value => console.log('selector multiple', value)}
        keyProperty={'name'}></CustomSelector>
      <CustomBoolean
        type={'Switch'}
        title={'Ejemplo'}
        getValue={value => {}}></CustomBoolean>
      <CustomBoolean
        type={'RadioButton'}
        title={'Ejemplo'}
        getValue={value => {}}></CustomBoolean>
      <CustomCheckBox title={'check'} getValue={() => {}}></CustomCheckBox>
      <CustomCheckBox title={'check'} getValue={() => {}}></CustomCheckBox>
      <CustomDateTimePicker
        defaultValue={''}
        getValue={console.log}
        placeholder={'Seleccionar una fecha'}></CustomDateTimePicker>

      <Surface
        style={{
          padding: 8,
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={5}
        mode="elevated">
        <Text>Surface</Text>
      </Surface>

      <AnimatedFAB
        icon={'plus'}
        label={'Label'}
        extended={true}
        onPress={() => console.log('Pressed')}
        visible={true}
        animateFrom={'right'}
        iconMode={'dynamic'}
        style={{
          bottom: 16,
          right: 16,
          position: 'absolute',
        }}
      />
      <Snackbar
        visible={true}
        onDismiss={() => {}}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
        //duration={1000}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </BaseScreen>
  );
};
