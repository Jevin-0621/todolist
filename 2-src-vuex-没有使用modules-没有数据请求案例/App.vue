<template>
  <div>
    <button @click = "update"> 更新数据 </button>
    <ul>
      <li v-for = "v in lists" :key="v.id">
        {{ v.d_title }}
      </li>
    </ul>
  </div>
</template>

<script>
//todo 任务： 拿数据
export default {
  //todo 使用计算属性来取store里面的数据
  data () {
    return {
      num: 10
    }
  },
  computed: {
    lists () {
      return this.$store.state.lists 
    }
  },
  methods: {
    update () {
      //todo  这里通过dispatch来连接 comp & actions 
      //? this.$store.dispatch(type,payload) type就是动作类型，写actions中的方法名 payload  负载 指的是由组件传递到actions中的数据
      this.$store.dispatch('getLists',this.num)
    }
  }
}
</script>