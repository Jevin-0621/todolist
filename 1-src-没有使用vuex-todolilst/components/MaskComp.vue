<template>
  <div class="mask" @click.self="closeMaskFlag">
    <div class="container">
      <input  type="text" placeholder="请输入代办事项" v-model="val"/>
      <div class="mask-btn">
        <button class="button button-fill" @click="closeMaskFlag">取消</button>
        <button class="button button-success button-fill" 
          @click="confirm"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  props: ['closeMaskFlag','activeType','modifyDefaultVal'],
  methods: {
    clearVal () {
      this.val = ''
    },
    confirm () {
      //? 要走两个逻辑 分别是添加，或者是修改
      if (this.activeType === 'edit') {
        // 添加逻辑
        this.$emit('get',this.val)
      } 
      if (this.activeType === 'modify') {
        // 修改逻辑 
        this.$emit('update',this.val)
      }
      this.closeMaskFlag()
      this.clearVal()
    }
  },
  mounted () {
    if (this.activeType === 'modify') {
      this.val = this.modifyDefaultVal
    }
  }
}
</script>
