import React, {useEffect, useState} from 'react';
import {Item, Section} from '../interfaces/DynamicQuestion';
import {CustomInput} from './BaseComponents/CustomInput';
import {CustomBoolean} from './BaseComponents/CustomBoolean';
import {MultiInputForm} from './DynamicQuestionComponents/MultiInputForm';
import {MultiBooleanForm} from './DynamicQuestionComponents/MultiBooleanForm';

interface Props<T> {
  Sections: Section<T>[];
  onSubmit: (answers: Section<T>[]) => void;
}

export const DinamicQuestions = <T extends unknown>({
  Sections,
  onSubmit,
}: Props<T>) => {
  const [answers, setAnswers] = useState<Section<T>[]>(Sections);

  const updateAnswer = (idSection: number, idQuestion: number, answer: T) => {
    setAnswers(prevAnswers =>
      prevAnswers.map(section =>
        section.idSection === idSection
          ? {
              ...section,
              questions: section.questions.map(question =>
                question.idQuestion === idQuestion
                  ? {...question, answer}
                  : question,
              ),
            }
          : section,
      ),
    );
  };

  useEffect(() => {
    onSubmit(answers);
  }, [answers]);

  return (
    <>
      {/*  {answers.map(({sectionName, questions, idSection}) => (
        <SectionComponent key={idSection} title={sectionName} complete={false}>
          {questions.map(
            ({questionDesc, questionTypeName, answer, catalog, idQuestion}) => (
              <React.Fragment key={idQuestion}>
                {
                  {
                    TEXT: (
                      <CustomInput
                        placeholder={questionDesc}
                        defaultValue={answer as string}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        keyboard="default"></CustomInput>
                    ),
                    NUMBER: (
                      <CustomInput
                        placeholder={questionDesc}
                        defaultValue={answer as string}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        keyboard="number-pad"></CustomInput>
                    ),
                    DATE: (
                      <DateTimePickerForm
                        placeholder={questionDesc}
                        defaultValue={answer as string}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        type={'date'}></DateTimePickerForm>
                    ),
                    TIME: (
                      <DateTimePickerForm
                        placeholder={questionDesc}
                        defaultValue={answer as string}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        type={'time'}></DateTimePickerForm>
                    ),
                    DATETIME: (
                      <DateTimePickerForm
                        placeholder={questionDesc}
                        defaultValue={answer as string}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        type={'datetime'}></DateTimePickerForm>
                    ),
                    RADIOBUTTON: (
                      <CustomRadioBotton
                        defaultValue={answer as boolean}
                        placeholder={questionDesc}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }></CustomRadioBotton>
                    ),
                    SWITCH: (
                      <SwitchForm
                        placeholder={questionDesc}
                        defaultValue={answer as boolean}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }></SwitchForm>
                    ),
                    SELECTOR: (
                      <Selector
                        catalog={catalog}
                        selectedItem={item =>
                          updateAnswer(idSection, idQuestion, item as T)
                        }
                        placeholder={questionDesc}
                        textItem={item => item.itemName}></Selector>
                    ),
                    CALCULATION: (
                      <CustomInput
                        placeholder={questionDesc}
                        defaultValue={answer as string}
                        isEditable={false}
                        getValue={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        keyboard="number-pad"></CustomInput>
                    ),
                    MULTITEXT: (
                      <MultiInputForm
                        questionTitle={questionDesc}
                        questionItems={answer as Item<string>[]}
                        inputType={'text'}
                        getValues={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }></MultiInputForm>
                    ),
                    MULTINUMBER: (
                      <MultiInputForm
                        questionTitle={questionDesc}
                        questionItems={answer as Item<string>[]}
                        inputType={'number'}
                        getValues={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }></MultiInputForm>
                    ),
                    MULTIDATE: <></>,
                    MULTITIME: <></>,
                    MULTIDATETIME: <></>,
                    MULTIRADIOBUTTON: (
                      <MultiBooleanForm
                        getValues={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        questionTitle={questionDesc}
                        questionItems={answer as Item<boolean>[]}
                        type={'radiobutton'}></MultiBooleanForm>
                    ),
                    MULTISWITCH: (
                      <MultiBooleanForm
                        questionTitle={questionDesc}
                        questionItems={answer as Item<boolean>[]}
                        getValues={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        type={'switch'}></MultiBooleanForm>
                    ),
                    MULTIRADIOBUTTONSINGLEANSWER: (
                      <MultiBooleanForm
                        isSingleAnswer={true}
                        getValues={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        questionTitle={questionDesc}
                        questionItems={answer as Item<boolean>[]}
                        type={'radiobutton'}></MultiBooleanForm>
                    ),
                    MULTISWITCHSINGLEANSWER: (
                      <MultiBooleanForm
                        isSingleAnswer={true}
                        questionTitle={questionDesc}
                        questionItems={answer as Item<boolean>[]}
                        getValues={defaultValue =>
                          updateAnswer(idSection, idQuestion, defaultValue as T)
                        }
                        type={'switch'}></MultiBooleanForm>
                    ),
                  }[questionTypeName]
                }
              </React.Fragment>
            ),
          )}
        </SectionComponent>
      ))} */}
    </>
  );
};
