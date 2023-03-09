<template>
  <div>
    <Son :name="name" @getName="getName"></Son>
 
  </div>

</template>

<script>
// 1. 从vue框架中引入reactive函数
import {reactive,toRefs,ref,computed} from 'vue'
import Son from './Son.vue'
export default {
  components: {
    Son
  },
  setup() {
    // 2. 在setup中调用函数并将数据对象引入
    const name = ref('小明')
    const user = reactive({
      name: 'zs',
      age: 18
    })
    const getName = (newval)=>{
        console.log(newval)
    }
    // 3.在setup函数中把reactive函数调用完毕之后的返回值以对象的形式返回出去
    return {
      name,getName
    }
  }
}
</script>
