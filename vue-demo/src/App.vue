<template>
  <div id="app">
    <router-link to='/todos'>
        <a>todos</a>
    </router-link>
    <router-link to='/empty'>
        <a>empty</a>
    </router-link>
    <router-view /> 
    <!-- <router-view name='empty'/>  -->
  </div>
</template>

<script>
export default {
  name: 'App'
  ,components:{

  }
  // ,mounted(){
  //   this.$store.dispatch('todoAdd',{id:1,value:'我是默认的'})
  // }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
 
</style>
