import { Layout, LayoutParams, Navigation, Template } from './types';

export interface Settings {
  layout: {
    current: Layout;
    params: LayoutParams;
  };
  template: Template;
  navigation: Navigation;
}

export interface Post {
  id: string;
  caption: string;
  permalink: string;
  date: string;
  likes: number;
  comments: number;
  userId: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  postId: string;
}
