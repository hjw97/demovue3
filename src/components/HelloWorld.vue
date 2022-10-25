<script setup lang="ts">
import { ref ,reactive} from 'vue'
import "../mock/index.js";
import {findAll} from "../api/mockApi/mockApi";

defineProps<{ msg: string }>()

//页面数据请求
let tableData = reactive([]);
const getList = () =>{
  findAll()
  .then((res: { code: string; data: never[]; }) => {
    if (res.code === "0"){ 
        tableData.push.apply(tableData, res.data);
      }
    })
    .catch(function (error: any) {
      console.log(error);
    });
}
getList()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
