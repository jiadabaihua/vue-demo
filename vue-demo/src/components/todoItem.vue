<template>
    <div>
        <em>{{data.value}}</em>
        <i @click="removeTodo(data)">删除</i>
    </div>
</template>
<script>
export default {
    props:['data']
    ,methods:{
        removeTodo(data){
            this.$emit('removeTodo',data);
        }
    }
}
</script>
