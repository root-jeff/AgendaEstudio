import React, {useContext, useState} from 'react';
import {Menu} from 'react-native-paper';
import {GestureCoord} from '../../interfaces/BaseInterface';
import {GestureResponderEvent} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface MenuItem {
  leadingIcon?: string;
  onPress: () => void;
  title: string;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
}

interface MenuHeaderProps {
  menuPosition: GestureCoord;
  isVisible: boolean;
  onDismiss: () => void;
  menuItems: MenuItem[];
}
export const CustomMenu = ({
  menuPosition,
  isVisible,
  onDismiss,
  menuItems,
}: MenuHeaderProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Menu visible={isVisible} anchor={menuPosition} onDismiss={onDismiss}>
      {menuItems.map((props, index) => (
        <Menu.Item
          key={index}
          titleStyle={{color: props?.color ?? theme.colors.secondary}}
          style={{
            backgroundColor:
              props?.backgroundColor ?? theme.colors.elevation.level2,
          }}
          {...props}
          onPress={() => {
            props.onPress();
            onDismiss();
          }}
        />
      ))}
    </Menu>
  );
};

export const useCustomMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = React.useState<GestureCoord>({
    x: 0,
    y: 0,
  });

  const showMenu = (event: GestureResponderEvent) => {
    const {nativeEvent} = event;
    setMenuPosition({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setIsMenuVisible(true);
  };
  const hideMenu = () => setIsMenuVisible(false);
  return {
    showMenu,
    isMenuVisible,
    menuPosition,
    hideMenu,
  };
};
