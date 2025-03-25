export type Layout = 'grid' | 'masonry';
export type LayoutElement = 'columns' | 'rows';
export type Template = 'classic' | 'hover';
export type Navigation = 'load-more' | 'pagination';

export type LayoutConfig = Record<LayoutElement, number>;
export type LayoutParams = Record<Layout, LayoutConfig>;
