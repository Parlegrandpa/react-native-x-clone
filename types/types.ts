export interface IconData {
  icon: number;
  color: any;
  focused: boolean;
}

export interface CustomFlatListProps {
  data: PostData[];
  onScrollEvent?: any;
  screen?: ScreenTypes;
}

export interface SinglePostData {
  data: PostData;
}

export interface PostData {
  accountName: string;
  username: string;
  postAt: string;
  bodyText: string;
  media?: MediaData[];
}

export interface MediaData {
  type: MediaTypes;
  url: string;
}

export type MediaTypes = "video" | "image";

export type ScreenTypes = "forYou" | "following" | "chelseaFan" | "default";

export interface CustomFlatListItemProps {
  listData: PostData;
  screen: string;
}
