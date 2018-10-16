import Vue from 'vue';
import Vuex from 'vuex';
import mutation from './mutation';
import actions from './actions';
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        todoList:[]
    }
    ,mutations:mutation
    ,actions: actions
})

export default store;