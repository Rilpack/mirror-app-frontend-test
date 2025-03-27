type Layout = 'grid' | 'masonry' | 'other';
type LayoutElement = 'columns' | 'rows';
type Template = 'classic' | 'hover' | 'other';
type Navigation = 'load-more' | 'pagination' | 'other';

type LayoutConfig = Record<LayoutElement, number>;
type LayoutParams = Record<Layout, LayoutConfig>;

export interface Settings {
  layout: {
    current: Layout;
    params: LayoutParams;
  };
  template: Template;
  navigation: Navigation;
}
