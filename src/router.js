import Vue from "vue";
import Router from "vue-router";
import LoginPage from "./views/LoginPage.vue";
import ProfileListPage from "./views/ProfileListPage.vue";
import ProfilePage from "./views/ProfilePage";
import CreateProfilePage from "./views/CreateProfilePage";
import EditProfilePage from "./views/EditProfilePage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/",
      name: "profile-list",
      component: ProfileListPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile/new",
      name: "create-profile",
      component: CreateProfilePage
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: ProfilePage
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/profile/:id/edit",
      name: "edit-profile",
      component: EditProfilePage
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to.matched);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next({ name: "login" });
  }
  return next();
});

export default router;
