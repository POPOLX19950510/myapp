<template>
  <div id="header">
    <ul class="headerNav">
      <li> <router-link to="/">home</router-link></li>
      <li> <router-link to="/picture">Picture</router-link></li>
      <li> <router-link to="/content">Content</router-link></li>
      <li> <router-link to="/about">About</router-link></li>
      <li> <router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return{
        narArr:['home', 'Picture', 'Content', 'About', 'Contact']
      }
    },
  }
</script>

<style scoped >
#header{

}
  .headerNav{
    margin: auto;
    max-width:1000px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    background-color: paleturquoise;
  }
  .headerNav li {
    list-style: none;
    /*color: springgreen;*/
    border: 0.5px solid cyan;
    display: inline-block;
    width:100%;
    text-align: center;
    margin:20px 0;
  }
</style>
