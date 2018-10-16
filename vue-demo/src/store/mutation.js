export default {
    todoAdd(state,item){
        state.todoList.push(item);
    }
    ,removeTodo(state,item){
        state.todoList.splice(state.todoList.indexOf(item),1);
    }
}