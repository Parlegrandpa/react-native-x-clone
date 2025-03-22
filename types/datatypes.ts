import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

export interface XPostDataProps {
  post: PostDetailProps;
  repostDetails?: RepostDataProps;
}

export interface PostDetailProps {
  id: string;
  content: string;
  createdAt: string;
  author: AuthorProps;
  stats: StatsProps;
  media?: Array<MediaData>;
  replies?: RepliesDataProps;
}

export interface SinglePostData {
  data: XPostDataProps;
}

export interface MediaData {
  type: MediaTypes;
  url: string;
}

export interface MediaCardProps {
  media: MediaData[];
}

export type MediaTypes = "video" | "image" | "gif";

export interface RepliesDataProps {
  replies: PostDetailProps;
  likes: number;
}

export interface RepostDataProps {
  isRepost: boolean;
  originalPost: PostDetailProps;
}

export interface AuthorProps {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
}

export interface StatsProps {
  replies: number;
  reposts: number;
  likes: number;
  views: number;
}

export interface CustomFlatListProps {
  data: Array<XPostDataProps>;
  onScrollEvent?: any;
  screen?: ScreenTypes;
}

export interface StatsDataProps {
  data: StatsData;
}

export interface StatsData {
  replies: number;
  reposts: number;
  likes: number;
  views: number;
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

export interface PostContentContainerProps {
  post: PostDetailProps;
}
