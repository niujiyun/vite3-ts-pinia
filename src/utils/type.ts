export interface RouterItem {
  url: string;
  meta: metaItem;
  children?: RouterItem[];
}
interface metaItem {
  name: string;
  icon?: string;
}
