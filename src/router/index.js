import {createRouter, createWebHistory} from 'vue-router'
import listPage from '../views/listPage.vue'

const routes = [
  {
    path: '/',
    name: 'listPage',
    component: listPage
  },
  {
    path: '/',
    name: 'add',
    component: listPage
  },
  {
    path: '/',
    name: 'edit',
    component: listPage
  },
  {
    path: '/',
    name: 'delete',
    component: listPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router