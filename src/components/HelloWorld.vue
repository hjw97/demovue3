<template>
  <div>
    <p>姓名是:{{ name }}</p>
    <p>年龄是:{{ age }}</p>
    <p>数组是:{{listfilter}}</p>
    <button @click="age++">年龄+1</button>
     <button @click="changeList">改变数组</button>
     <Father></Father>
  </div>

</template>

<script>
// 1. 从vue框架中引入reactive函数
import {reactive,toRefs,ref,computed} from 'vue'
import Father from './Father.vue'
export default {
  setup() {
    // 2. 在setup中调用函数并将数据对象引入
    const name = ref('小明')
    const user = reactive({
      name: 'zs',
      age: 18
    })
    const list = ref([1,2,3,4,5])
    const listfilter = computed(()=>{
      return list.value.filter(item=>item>3)
    })
    function changeList(){
      list.value.push(6,8,9)
    }
    // 3.在setup函数中把reactive函数调用完毕之后的返回值以对象的形式返回出去
    return {
      ...toRefs(user),
      name,
      listfilter,
      list,
      changeList
    }
  }
}
</script>
