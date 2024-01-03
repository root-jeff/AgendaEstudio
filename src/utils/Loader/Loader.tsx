import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Modal} from 'react-native';
import {LoadingModal} from './LoaderComponents/LoadingModal';

type LoaderProps = {
  show: () => void;
  hide: () => void;
};

export const LoaderComponent = forwardRef<LoaderProps>((_props, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const show = () => {
    setIsLoading(false);
    setIsLoading(true);
  };
  const hide = () => setIsLoading(false);

  useImperativeHandle(ref, () => ({
    show: () => show(),
    hide: () => hide(),
  }));

  return (
    <Modal visible={isLoading} transparent animationType="fade">
      <LoadingModal></LoadingModal>
    </Modal>
  );
});

export const Loader = {
  show: () => loaderRef.current?.show() ?? {},
  hide: () => loaderRef.current?.hide() ?? {},
};

const loaderRef = useRef<LoaderProps | null>(null);
export const LoaderManager = () => (
  <LoaderComponent ref={ref => (loaderRef.current = ref)} />
);
