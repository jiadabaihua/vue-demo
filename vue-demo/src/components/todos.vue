<template>
    <div class="todo-wrapper">
        <em>TODOS</em>
        <todoInput @saveTodo='saveTodo'></todoInput>
        <todoItem
            v-for='item in todoList'
            :key="item.id"
            :data='item'
            @removeTodo='removeTodo'
        >
        </todoItem>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
import todoInput from '@/components/todoInput'
import todoItem from '@/components/todoItem'
export default {
    computed:{
        ...mapState(['todoList'])
    }
    ,components:{
        todoInput
        ,todoItem
    }
    ,mounted(){
        // this.$store.dispatch('todoAdd',{id:1,value:'我是默认的'})
    }
    ,methods:{
        saveTodo:function(velue){
            if(!velue){
                return ;
            }

            let todo={
                id:this.todoList.length+1,
                value:velue
            }
            this.$store.dispatch('todoAdd',todo)
        }
        ,...mapActions(['removeTodo','todoAdd'])
    }
}
</script>
<style>

</style>


