<template>
  <header class="bar bar-nav">
    <a class="icon icon-friends pull-left"></a>
    <a
      class="icon icon-edit pull-right"
      data-type="edit"
      @click="openMaskFlag"
    ></a>
    <h1 class="title">2020最后一天</h1>
  </header>
</template>

<script>
export default {
  props: ['openMaskFlag']
}
</script>
