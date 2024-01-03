import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext,
} from 'react';
import {AxiosError} from 'axios';
import {ApiErrorResponse} from '../../../interfaces/BaseApiInterface';

import {icons} from '../../../theme/appTheme';
import {AlertDefaut} from './AlertDefaut';
import {AlertImage} from './AlertImage';
import {AlertMultiOptions} from './AlertMultioptions';
import {AlertPromt} from './AlertPromt';
import {AlertYesNo} from './AlertYesNo';

type AlertType = 'default' | 'yesno' | 'promt' | 'image' | 'multioptions';
interface Options {
  title: string;
  message: string;
  placeholder?: string;
  imagePath?: string;
  icon?: string;
  iconColor?: string;
  onPress?: (value?: string) => void;
  onDismiss?: () => void;
  alertOptions?: {title: string; onPress: () => void}[];
}
interface AlertData extends Options {
  type: AlertType;
  value: string;
}

type AlertProps = {
  show: (type: AlertType, options: Options) => void;
};

const AlertComponent = forwardRef<AlertProps>((_props, ref) => {
  const [visible, setVisible] = useState(false);
  const [alertData, setAlertData] = useState<AlertData>({
    type: 'default',
    title: '',
    message: '',
    placeholder: '',
    value: '',
    imagePath: '',
    onPress: () => {},
    onDismiss: () => {},
    alertOptions: [],
  });

  const show = (type: AlertType, options: Options) => {
    setVisible(false);
    setAlertData({...options, type, value: ''});
    setVisible(true);
  };

  const checkValue = () => {
    // Verifica si el valor está vacío
    if (alertData.value.length === 0) {
      // Muestra una alerta
      show('default', {
        title: 'Aviso',
        message: 'Debe llenar el campo requerido',
      });
    } else {
      // Ejecuta OkFunction con el valor
      if (typeof alertData.onPress === 'function') {
        alertData.onPress(alertData.value);
      }
      // Vacía el valor y oculta la alerta
      setAlertData(prevData => ({...prevData, value: ''}));
      hide();
    }
  };

  const hide = () => setVisible(false);

  useImperativeHandle(ref, () => ({
    show: (type, options) => show(type, options),
  }));

  return (
    <>
      {
        {
          default: (
            <AlertDefaut
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              onPress={alertData.onPress}
            />
          ),
          yesno: (
            <AlertYesNo
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              onPress={alertData.onPress}
            />
          ),
          promt: (
            <AlertPromt
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              placeholder={alertData.placeholder}
              onDismiss={hide}
              onChangeText={newValue =>
                setAlertData(prevData => ({...prevData, value: newValue}))
              }
              onPress={checkValue}
            />
          ),
          image: (
            <AlertImage
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              onPress={alertData.onPress}
              imagePath={alertData?.imagePath ?? ''}
            />
          ),
          multioptions: (
            <AlertMultiOptions
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              options={alertData?.alertOptions ?? []}
            />
          ),
        }[alertData.type]
      }
    </>
  );
});

export const Alert = {
  show: (type: AlertType, options: Options) =>
    alertRef.current?.show(type, options) ?? {},
};

const alertRef = useRef<AlertProps | null>(null);
export const AlertManager = () => (
  <AlertComponent ref={ref => (alertRef.current = ref)} />
);
