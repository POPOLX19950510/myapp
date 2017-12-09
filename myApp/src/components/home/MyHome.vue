<template>
  <div class="home">
    <my-header></my-header>
    <my-index></my-index>
  </div>
</template>

<script>
  import MyHeader from '../Header.vue'
  import MyIndex from './MyIndex.vue'
  export default {
    name: '',
    components: {
      MyHeader,
      MyIndex
    }
  }
</script>

<style scoped >

</style>
