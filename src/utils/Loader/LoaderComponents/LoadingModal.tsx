import React from 'react';
import LottieView from 'lottie-react-native';

export const LoadingModal = () => {
  return (
    <LottieView
      source={require('../../../assets/Loader/Loader-Modal.json')}
      style={{flex: 1}}
      speed={1.75}
      autoPlay
      loop></LottieView>
  );
};
