type QuestionTypes =
  | 'TEXT'
  | 'NUMBER'
  | 'DATE'
  | 'TIME'
  | 'DATETIME'
  | 'RADIOBUTTON'
  | 'SWITCH'
  | 'SELECTOR'
  | 'CALCULATION'
  | 'MULTITEXT'
  | 'MULTINUMBER'
  | 'MULTIDATE'
  | 'MULTITIME'
  | 'MULTIDATETIME'
  | 'MULTIRADIOBUTTON'
  | 'MULTIRADIOBUTTONSINGLEANSWER'
  | 'MULTISWITCH'
  | 'MULTISWITCHSINGLEANSWER';

export interface Form<T> {
  idForm: number;
  syncIdForm: string;
  formName: string;
  sections: Section<T>[];
}

export interface Section<T> {
  idSection: number;
  sectionName: string;
  isVisible: boolean;
  isEnable: boolean;
  questions: Question<T>[];
}

export interface Question<T> {
  idQuestion: number;
  questionDesc: string;
  placeholder: string;
  answer: T;
  idCatalog?: number;
  questionTypeName: QuestionTypes;
  idQuestionType: number;
  isVisible: boolean;
  isEnable: boolean;
  isMultiAnswer: boolean;
  isRequired: boolean;
  catalog: Item<T>[];
}

export interface Item<T> {
  idItem: number;
  itemName: string;
  description: string;
  answer: T;
}
