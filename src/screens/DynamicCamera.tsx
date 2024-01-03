import React, {useEffect, useRef, useState} from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';
import {StyleSheet, View} from 'react-native';

export const DynamicCamera = () => {
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);
  const format = useCameraFormat(device, [{photoHdr: true}]);
  const [photo, setphoto] = useState('');
  const [flash, setflash] = useState<'on' | 'off'>('off');
  const takePhoto = async () => {
    await cameraRef.current
      ?.takePhoto({
        qualityPrioritization: 'speed',
        flash,
        enableShutterSound: false,
      })
      .then(({path}) => setphoto(path));
  };
  useEffect(() => {}, []);
  return (
    <BaseScreen>
      <>
        {device && (
          <Camera
            ref={cameraRef}
            style={{
              height: '90%',
              width: '90%',
              overflow: 'hidden',
            }}
            device={device}
            isActive={true}
            format={format}
            orientation="portrait"
            torch={flash}
            photo={true}
            enableZoomGesture
          />
        )}
        <View
          style={{
            marginVertical: '1%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {/*  <IconButton
            size={50}
            onPress={() => {
              Alert.show('image', {
                title: 'Aviso',
                message: 'Esta es la imagen',
                imagePath: `file://${photo}`,
              });
            }}
            iconType={'IonicIcon'}
            icon={iconos.IonicIcons.imagen}
          />
          <IconButton
            size={50}
            onPress={takePhoto}
            iconType={'IonicIcon'}
            icon={iconos.IonicIcons.camara}
          />
          <IconButton
            size={50}
            onPress={() =>
              setflash(prevFlash => (prevFlash === 'on' ? 'off' : 'on'))
            }
            iconType={'IonicIcon'}
            icon={iconos.IonicIcons.linterna}
          /> */}
        </View>
      </>
    </BaseScreen>
  );
};
