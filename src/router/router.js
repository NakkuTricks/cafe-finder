import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.name === "UserRegistration" || to.name === "UserAuthorization") {
    if (isAuthenticated) {
      return next("/");
    }

    return next();
  }

  if (!isAuthenticated) {
    return next("/authorization");
  }

  return next();
});

export default router;
