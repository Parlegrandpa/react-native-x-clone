import { MenuItem, Position, UseContextMenuReturn } from "@/types/types";
import { useState } from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

export const useContextMenu = (
  menuItems: MenuItem[] = []
): UseContextMenuReturn => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const showMenu = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
    const { pageX, pageY } = event.nativeEvent;
    setPosition({ x: pageX, y: pageY });
    setIsVisible(true);
  };

  const hideMenu = () => {
    setIsVisible(false);
  };

  const handleMenuItemPress = (action: string, callback?: () => void) => {
    console.log(`${action} pressed`);
    if (callback) callback();
    hideMenu();
  };

  return {
    isVisible,
    position,
    showMenu,
    hideMenu,
    handleMenuItemPress,
    menuItems,
  };
};
