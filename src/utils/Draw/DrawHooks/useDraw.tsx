import { SkiaDomView, useCanvasRef } from '@shopify/react-native-skia';
import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';

const imgDimentions = { width: 780, height: 330 }

export const useDraw = () => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const [paths, setPaths] = useState<string[]>([]);

  const onUndo = () => {
    // Check if paths array is not empty
    if (paths.length > 0) {
      // Remove the last item (path) from the paths array
      const updatedPaths = paths.slice(0, -1);
      setPaths(updatedPaths);
    }
  };

  // function to clear paths
  const onClear = () => {
    setPaths([]);
  };

  const onTouchMove = ({
    nativeEvent: { locationX, locationY },
  }: GestureResponderEvent,) => {
    // When the user touches outside the canvas, onTouchMove event must stop immediately
    // Use toFixed to remove decimal places. This makes the path more efficient.
    const newPoint = `${currentPath.length === 0 ? 'M' : 'L'
      }${locationX.toFixed(0)},${locationY.toFixed(0)} `;
    setCurrentPath(prevPath => prevPath + newPoint);
  };

  const resizeDrawToOriginalImg = (draw: string[], newWidth: number, newHeight: number) => {
    return draw.map((path) =>
      path.replace(/(\d+)[, ](\d+)/g, (match, x, y) =>
        `${(x * (imgDimentions.width / newWidth)).toFixed(0)},${(y * (imgDimentions.height / newHeight)).toFixed(0)}`
      )
    );
  };
  const resizeResponsiveDraw = (draw: string[], newWidth: number, newHeight: number) => {
    return draw.map((path) =>
      path.replace(/(\d+)[, ](\d+)/g, (match, x, y) =>
        `${(x * (newWidth / imgDimentions.width)).toFixed(0)},${(y * (newHeight / imgDimentions.height)).toFixed(0)}`
      )
    );
  };


  const onTouchEnd = () => {
    // When the user releases the mouse button, add the current path to the paths list
    setPaths([...paths, currentPath]);
    setCurrentPath('');
    console.log(paths)
  };
  return {
    onClear,
    onTouchMove,
    onTouchEnd,
    onUndo,
    paths,
    setPaths,
    currentPath,
    resizeDrawToOriginalImg,
    resizeResponsiveDraw
  };
};
