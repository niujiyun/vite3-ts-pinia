import { computed } from 'vue';
import { usetagStore } from '@/stores/tag';
import { useRouter } from 'vue-router';
export const useTag = () => {
  const tag = usetagStore();
  const router = useRouter();
  const tagList = computed(() => {
    return tag.tagList;
  });
  const addTag = (list: TagList) => {
    const item = tagList.value.find((el) => el.path === list.path);
    if (!item) {
      tag.tagList.push(list);
    }
  };
  const deleteTag = (path: string, currentPath: string) => {
    const index = tagList.value.findIndex((el) => el.path === path);
    const tagLength = tagList.value.length;
    if (index !== -1) {
      if (index === 0 && tagLength == 1) {
        return;
      } else if (path === currentPath) {
        if (index === 0) {
          const url = tag.tagList[index + 1].path;
          router.push(url);
        } else {
          const url = tag.tagList[index - 1].path;
          router.push(url);
        }

        tag.tagList.splice(index, 1);
      } else {
        tag.tagList.splice(index, 1);
      }
    }
  };
  return { tagList, addTag, deleteTag };
};
interface TagList {
  path: string;
  name: string;
}
