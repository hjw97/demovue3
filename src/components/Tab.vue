<template>
    <div class="tab">
      <van-tabbar v-model="active">
        <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace  to="/main" icon="search">标签</van-tabbar-item>
        <van-tabbar-item replace  to="/my" icon="setting-o">标签</van-tabbar-item>
      </van-tabbar> 
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
    return {
      icon,
      active,
    };
  },
};
</script>
<style lang="less" scoped>
    .van-tabbar{
        border-top:1px solid #f9f9f9;
    }
</style>