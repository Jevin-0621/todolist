<template>
  <div class="content">
    <div class="card" v-for="item in todos" :key="item.id">
      <div class="card-content">
        <div class="card-content-inner">
          <h3>{{ item.task }}</h3>
          <div class="action">
            <div class="left">
              <button
                class="button button-success"
                :class="{ 'button-fill': item.flag }"
                @click="flagChange(item.id)"
              >
                <i class="icon icon-check"></i>
              </button>
              <span> {{ item.flag ? "已完成" : "未完成" }} </span>
            </div>
            <div class="right">
              <button class="button button-fill" data-type="modify"
                @click="openMaskFlag($event,item.task,item.id)"
              >
                修改
              </button>
              <button class="button button-danger button-fill"
                @click = "clear(item.id)"
              >删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["todos",'openMaskFlag'],
  methods: {
    flagChange(id) {
      this.$emit("change-flag", id);
    },
    clear (id) {
      this.$emit('remove',id)
    }
  },
};
</script>
