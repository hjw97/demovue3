<template>
  <div>
    父组件传过来的值:{{name}}
  <button @click="sendFather">发给子组件</button>
  </div>

</template>

<script>
// 1. 从vue框架中引入reactive函数
import {reactive,toRefs,ref,computed} from 'vue'
export default {
  props: {
    name: {
      type: String
    }
  },
  emits: ['getName'],
  setup(props,context) {
      const sendFather = ()=>{
        context.emit('getName','字组件穿过了')
      }
      return{
          sendFather
      }
  }
}
</script>
