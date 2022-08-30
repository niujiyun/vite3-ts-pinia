import { defineStore } from 'pinia';
export const usetagStore = defineStore('tag', {
  state: (): Tag => ({
    tagList: []
  })
});
interface TagList {
  path: string;
  name: string;
}
interface Tag {
  tagList: TagList[];
}
