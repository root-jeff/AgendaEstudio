import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Modal} from 'react-native';
import {DocumentShow} from './DocumentShow';

type DocumentProps = {
  show: (options: Options) => void;
  hide: () => void;
};

interface Options {
  title: string;
  fileName: string;
  filePath: string;
  icon?: string;
  iconColor?: string;
  download?: boolean;
  onPress?: (value?: string) => void;
  onDismiss?: () => void;
}

export const DocumentComponent = forwardRef<DocumentProps>((_props, ref) => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<Options>({
    title: '',
    fileName: '',
    filePath: '',
    download: false,
    onPress: () => {},
    onDismiss: () => {},
  });

  const show = (options: Options) => {
    setVisible(false);
    setOptions(options);
    setVisible(true);
  };

  const hide = () => setVisible(false);

  useImperativeHandle(ref, () => ({
    show: (options: Options) => show(options),
    hide: () => hide(),
  }));

  return (
    <DocumentShow
      visible={visible}
      onDismiss={hide}
      title={options.title}
      message={options.fileName}
      download={options?.download ?? false}
      documentPath={options.filePath}></DocumentShow>
  );
});

export const Document = {
  show: (options: Options) => DocumentRef.current?.show(options) ?? {},
  hide: () => DocumentRef.current?.hide() ?? {},
};

const DocumentRef = useRef<DocumentProps | null>(null);
export const DocumentManager = () => (
  <DocumentComponent ref={ref => (DocumentRef.current = ref)} />
);
