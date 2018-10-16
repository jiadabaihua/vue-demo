import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/todos'
import todoInput from '@/components/todoInput'
import empty from '@/components/empty'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    }
    ,{
      path: '/todoInput',
      name: 'todoInput',
      component: todoInput
    }
    ,{
      path: '/empty',
      name: 'empty',
      component: empty
    }
  ]
  // ,mode: 'history'
})
