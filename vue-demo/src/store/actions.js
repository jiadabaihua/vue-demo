export default {
    todoAdd({commit},data){
        commit('todoAdd',data)
    }
    ,removeTodo({commit},data){
        commit('removeTodo',data)
    }
}