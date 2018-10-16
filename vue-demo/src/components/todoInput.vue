<template>
  <div>
    <input class='todo-input' 
      v-model="inputVal" 
      placeholder="请输入TODO"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
 
export default {
  components:{
    // test
  },
  data () {
    return {
      inputVal:'',
      msg: 'Welcome to Your Vue.js App'
    }
  }
  ,methods:{
    addTodo:function(){
      this.$emit('saveTodo',this.inputVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-input{
  display: block;
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
  text-indent: 5px;
  border: 1px solid #eee;
  border-radius: 5px;
}
.add-btn{
  display: inline-block;
    width: 100px;
    height: 40px;
    background: #eee;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}
</style>
