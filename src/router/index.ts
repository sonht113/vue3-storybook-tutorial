import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductDetailView from "@/views/product/ProductDetailView.vue";
import ProductCreateView from "@/views/product/ProductCreateView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/create",
    name: "create-product",
    component: ProductCreateView,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetailView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
});

export default router;
