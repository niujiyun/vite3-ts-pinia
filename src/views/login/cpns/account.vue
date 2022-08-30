<template>
  <div class="account">
    <h2 class="login">xxx管理系统</h2>
    <el-form :model="account" ref="accountRef" :rules="rules">
      <el-form-item prop="name">
        <el-input v-model="account.name" size="large" style="width: 100%" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="account.password" size="large" style="width: 100%" type="password" />
      </el-form-item>
    </el-form>
    <el-button type="primary" class="btn" size="large" @click="login">登录</el-button>
    <test></test>
  </div>
</template>

<script lang="ts" setup>
import test from './test';
import { reactive, ref } from 'vue';
import type { Account } from '../type';

import { useLogin } from '@/stores/login';

import type { FormInstance, FormRules } from 'element-plus';

const account: Account = reactive({
  name: 'admin',
  password: '123456'
});

const accountRef = ref<FormInstance>();

const rules = reactive<FormRules>({
  name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
});
const loginInfo = useLogin();
const login = () => {
  accountRef.value?.validate((validate) => {
    if (validate) {
      loginInfo.LoginInfo(account);
    }
  });
};
</script>

<style scoped lang="scss">
.account {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  padding: 0 15%;
  box-sizing: border-box;
  .login {
    width: 100%;
    padding: 30px;
  }
  .btn {
    width: 100%;
    margin-top: 20px;
  }
}

.el-form-item {
  margin-bottom: 30px;
}
::v-deep(.el-input__wrapper) {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
