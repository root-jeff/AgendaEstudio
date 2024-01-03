import React, {useState} from 'react';
import {
  Image,
  LayoutChangeEvent,
  View,
  useWindowDimensions,
} from 'react-native';
import {CustomButton} from '../../components/BaseComponents/CustomButton';
import {SkImage, useImage} from '@shopify/react-native-skia';
import {DrawModal} from './DrawComponents/DrawModal';
import {useDraw} from './DrawHooks/useDraw';
import {Canvas, Image as SkiaImage, Path} from '@shopify/react-native-skia';
import {Base64Img} from '../../assets/ImagesBase64';

interface Props {
  draw: (draw: string[]) => void;
  image: SkImage | null;
  text: string;
}

export const DarwImage = ({draw, image, text}: Props) => {
  const {width} = useWindowDimensions();
  const {resizeResponsiveDraw} = useDraw();
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const [paths, setpaths] = useState<string[]>([]);
  const [isDraw, setIsDraw] = useState(false);
  return (
    <View>
      {/* <Image
        source={{ uri: imagepath }}
        style={{ width: 780, height: 330 }}></Image> */}

      <Canvas
        style={{
          width: width * 0.12 * (780 / 330),
          height: width * 0.12,
          overflow: 'hidden',
        }}
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
            strokeWidth={0.4}
            path={path}
            style="stroke"
            strokeJoin="round"
          />
        ))}
      </Canvas>
      {/*   <CustomButton
        width={dimensions.width}
        onPress={() => setIsDraw(true)}
        title={`Rayado ${text}`}></CustomButton> */}
      <DrawModal
        CloseFunction={() => setIsDraw(false)}
        isVisible={isDraw}
        image={image}
        draw={e => {
          draw(e);
          setpaths(
            resizeResponsiveDraw(e, dimensions.width, dimensions.height),
          );
        }}
        initialDraw={[]}></DrawModal>
    </View>
  );
};
