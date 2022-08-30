<template>
  <div class="login">
    <div class="content">
      <div class="red">
        <div class="blue">
          <div class="box">
            <account></account>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import account from './cpns/account.vue';
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/background.webp') no-repeat;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 420px;
    height: 520px;
    // background: #000;
    .base {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      transition: transform 0.5s;
    }
    .red {
      @extend .base;
      transform: rotate(10deg);
      background-color: #f00;
      .blue {
        @extend .base;
        transform: rotate(-20deg);
        background-color: #69a4f8;
        .box {
          @extend .base;
          transform: rotate(10deg);
          background-color: #f3f4f6;
        }
      }
    }
  }
}
</style>
