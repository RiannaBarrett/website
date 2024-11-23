import { createRouter, createWebHistory } from 'vue-router';
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import DashboardPage from '../components/DashboardPage.vue'; 
import InformGuide from '@/components/InformGuide.vue';

const routes = [
  { path: '/', component: DashboardPage },  // Default route is now Dashboard
  { path: '/login', component: LoginForm },
  { path: '/signup', component: SignupForm },
  {path: '/inform', component: InformGuide},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
