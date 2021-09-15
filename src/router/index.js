import {createRouter, createWebHistory} from 'vue-router'
import listPage from '../views/listPage.vue'
import listPage from '../views/listEntryPage.vue'

const routes = [
  {
    path: '/',
    name: 'listPage',
    component: listPage
  },
  {
    path: '/add',
    name: 'add',
    component: listEntryPage
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: listEntryPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router