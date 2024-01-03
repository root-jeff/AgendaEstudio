import React from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {DinamicQuestions} from '../components/DinamicQuestions';
import {dynamicQuestions} from '../data/DynamicQuestionExample';

export const DinamicQuestionsScreen = () => {
  return (
    <BaseScreen isScroll={true}>
      <DinamicQuestions
        Sections={dynamicQuestions[0].sections}
        onSubmit={() => {}}></DinamicQuestions>
    </BaseScreen>
  );
};
