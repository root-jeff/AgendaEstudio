import React, {useEffect, useState} from 'react';

import {LayoutChangeEvent, View, useWindowDimensions} from 'react-native';
import {
  Canvas,
  Image as SkiaImage,
  Path,
  SkImage,
} from '@shopify/react-native-skia';
import {BaseModalProps, BaseModal} from '../../../Template/BaseModal';
import {useDraw} from '../DrawHooks/useDraw';

interface Props extends BaseModalProps {
  image: SkImage | null;
  draw: (draw: string[]) => void;
  initialDraw: string[];
}

export const DrawModal = ({
  isVisible,
  CloseFunction,
  image,
  draw,
  initialDraw = [],
}: Props) => {
  const {width} = useWindowDimensions();
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const {
    onClear,
    onTouchMove,
    onTouchEnd,
    onUndo,
    paths,
    setPaths,
    currentPath,
    resizeDrawToOriginalImg,
  } = useDraw();
  useEffect(() => {
    setPaths(initialDraw);
  }, []);
  return (
    <BaseModal CloseFunction={CloseFunction} isVisible={isVisible}>
      <View
        style={{
          backgroundColor: 'white',

          padding: '3%',
        }}>
        <Canvas
          style={{
            width: width * 0.35 * (780 / 330),
            height: width * 0.35,
            overflow: 'hidden',
          }}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onLayout={({
            nativeEvent: {
              layout: {width, height},
            },
          }: LayoutChangeEvent) =>
            setDimensions({
              width,
              height,
            })
          }>
          {image && (
            <SkiaImage
              image={image}
              fit="contain"
              x={0}
              y={0}
              width={dimensions.width}
              height={dimensions.height}
            />
          )}
          {paths.map((path, index) => (
            <Path
              key={index}
              color={'red'}
              strokeWidth={1}
              path={path}
              style="stroke"
              strokeJoin="round"
            />
          ))}
          <Path
            color={'red'}
            strokeWidth={1}
            path={currentPath}
            style="stroke"
            strokeJoin="round"
          />
        </Canvas>
        <View
          style={{
            width: dimensions.width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {/* <IconButton
            backgroundColor={colores.rojo}
            onPress={CloseFunction}
            iconType={'IonicIcon'}
            icon={iconos.IonicIcons.atras}
            responsiveSize={0.08}></IconButton>
          <IconButton
            onPress={onUndo}
            iconType={'IonicIcon'}
            icon={iconos.IonicIcons.deshacer}
            responsiveSize={0.08}></IconButton>
          <IconButton
            backgroundColor={colores.plomo}
            onPress={onClear}
            iconType={'IonicIcon'}
            icon={iconos.IonicIcons.recargar}
            responsiveSize={0.08}></IconButton>
          <IconButton
            backgroundColor={colores.verde}
            onPress={() => {
              draw(
                resizeDrawToOriginalImg(
                  paths,
                  dimensions.width,
                  dimensions.height,
                ),
              );
              CloseFunction();
            }}
            iconType={'IonicIcon'}
            icon={iconos.IonicIcons.visto}
            responsiveSize={0.08}></IconButton> */}
        </View>
      </View>
    </BaseModal>
  );
};
