import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import BusinessList from "../views/BusinessList.vue";
// ... ...

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  {
    path: "/businessList",
    name: "BusinessList",
    component: BusinessList,
  },
];

//解决重复路由报异常问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
