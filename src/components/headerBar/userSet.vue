<template>
  <div class="userSet">
    <el-dropdown>
      <div class="user">
        <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <div>管理员</div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const loginOut = () => {
  localStorage.clear();
  router.push('/login');
};
</script>

<style scoped lang="scss">
.userSet {
  padding: 0 10px;
  cursor: pointer;
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
