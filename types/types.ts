import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { PostDetailProps, XPostDataProps } from "./datatypes";

export interface XPostData {}

export interface IconData {
  icon: number;
  color: any;
  focused: boolean;
}

export type ScreenTypes =
  | "forYou"
  | "following"
  | "chelseaFan"
  | "default"
  | "allnotification";

export interface CustomFlatListItemProps {
  listData: XPostDataProps;
  screen: string;
}

export interface MiniStatsProp {
  icon: any;
  value?: string;
}

// Define the shape of the position object
export interface Position {
  x: number;
  y: number;
}

// Define the shape of a menu item
export interface MenuItem {
  label: string;
  icon: any;
  callback?: () => void;
}

// Define the return type of the hook
export interface UseContextMenuReturn {
  isVisible: boolean;
  position: Position;
  showMenu: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  hideMenu: () => void;
  handleMenuItemPress: (action: string, callback?: () => void) => void;
  menuItems: MenuItem[];
}

export interface PostMenuModalProps {
  isVisible: boolean;
  position: Position;
  hideMenu: () => void;
  handleMenuItemPress: (action: string, callback?: () => void) => void;
  menuItems: MenuItem[];
}
