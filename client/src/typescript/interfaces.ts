import { Layout, LayoutParams, Navigation, Template } from './types';

export interface Settings {
  layout: {
    current: Layout;
    params: LayoutParams;
  };
  template: Template;
  navigation: Navigation;
}
