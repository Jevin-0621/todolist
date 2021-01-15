<template>
  <ul class="tabbar">
    <li
      class="circle"
      v-for="v in tabbars"
      :key="v.id"
      :class="['circle-'+ v.className,type===v.text?'circle-fill':'']"
      @click = "updateType(v.text)"
    >
      {{ v.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      tabbars: [
        {
          id: 1,
          text: 'A',
          className: 'success'
        },
        {
          id: 2,
          text: 'F',
          className: 'warning'
        },
        {
          id: 3,
          text: 'U',
          className: 'danger'
        },

      ]
    }
  },
  props: ['type'],
  methods: {
    updateType (type) {
      this.$emit('get-type',type)
    }
  }
}
</script>
