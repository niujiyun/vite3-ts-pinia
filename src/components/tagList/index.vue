<template>
  <div class="tagList">
    <el-tag
      class="mx-1"
      v-for="item in list"
      :key="item.path"
      :type="routes.path === item.path ? 'success' : ''"
      closable
      @click="handleOnClick(item.path)"
      @close="handleClose(item.path)"
    >
      {{ item.name }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useTag } from '@/hooks/useTag';
import { useRoute, useRouter } from 'vue-router';
const tag = useTag();
const list = computed(() => {
  return tag.tagList.value;
});
const routes = useRoute();
const router = useRouter();
const handleOnClick = (val: string) => {
  if (val !== routes.path) {
    router.push(val);
  }
};
const handleClose = (val: string) => {
  tag.deleteTag(val, routes.path);
};
</script>

<style scoped lang="scss">
.tagList {
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dcdfe6;
  cursor: pointer;
  .el-tag {
    margin: 0 5px;
  }
}
</style>
