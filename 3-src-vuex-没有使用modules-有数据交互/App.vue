<template>
  <div>
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
  mounted () {
    this.$store.dispatch('getLists',{cid:17})
  }
}
</script>