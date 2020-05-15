<template>
  <div id="app">
    <commonheader v-if='this.$route.meta.header'></commonheader>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
export default {
  name: 'App',
  data(){
    return{
      msg:''
    }
  },
  components: {
      commonheader: Header
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
