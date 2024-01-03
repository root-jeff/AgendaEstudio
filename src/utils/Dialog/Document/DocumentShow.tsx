import React, {useRef} from 'react';
import {DialogBase, BaseDialogProps} from '../DialogComponents/DialogBase';
import {Dialog} from 'react-native-paper';
import {DialogButton} from '../DialogComponents/DialogButton';
import Pdf from 'react-native-pdf';
import {ToastAndroid, useWindowDimensions} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';

interface Props extends BaseDialogProps {
  onPress?: () => void;
  documentPath: string;
  download: boolean;
}

export const DocumentShow = ({
  visible,
  onDismiss,
  title,
  message,
  icon,
  iconColor,
  documentPath,
  download,
}: Props) => {
  const {width} = useWindowDimensions();
  const pdfRef = useRef<Pdf>();
  /*  const downloadPdf = () => {
    ReactNativeBlobUtil.config({
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: title,
        description: 'El pdf ha sido descargado',
      },
    })
      .fetch('GET', documentPath)
      .then(() => ToastAndroid.show('Pdf Descargado', ToastAndroid.LONG))
      .catch((res: any) => console.log(res));
  }; */
  return (
    <DialogBase
      dismissable={true}
      visible={visible}
      onDismiss={onDismiss}
      title={title}
      message={message}
      icon={icon}
      iconColor={iconColor}
      children={
        <Pdf
          ref={ref => (pdfRef.current = ref!)}
          trustAllCerts={false}
          source={{uri: documentPath, cache: true}}
          style={{height: width * 1.5, width: width * 0.8, alignSelf: 'center'}}
        />
      }
      buttonsChilren={
        <Dialog.Actions>
          {download && (
            <DialogButton
              onPress={() => {
                //downloadPdf();
                onDismiss();
              }}
              title={'Descargar'}></DialogButton>
          )}
          <DialogButton onPress={onDismiss} title={'Cerrar'}></DialogButton>
        </Dialog.Actions>
      }></DialogBase>
  );
};
