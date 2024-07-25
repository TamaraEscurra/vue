import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Importar componente TodoList.
//import TodoList from '../views/TodoList.vue'
// Importar componente IssueList.
//import IssueList from '../views/IssueList.vue'
// Importar componente TodosIssues.
//import TodosIssues from '../views/TodosIssues.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todo-list" */ '../views/TodoList.vue')
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "issue-list" */ '../views/IssueList.vue')
  },
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "issue-list" */ '../views/TodosIssues.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
