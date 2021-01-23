<template>
  <header class="px-md-4 mb-3 bg-white border-bottom border-warning">
    <nav
      class="navbar navbar-expand-lg navbar-light flex-md-row align-items-center p-0"
    >
      <div class="container">
        <a href="javascript:;" class="navbar-brand pb-0">
          <img src="../../assets/logo.png" alt="" />
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbars"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbars" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto nav nav-tabs border-bottom-0 mt-3">
            <template v-for="(item, index) in menuItems">
              <li
                class="nav-item mx-2"
                v-if="!item.requireAuth || isLoggedIn"
                :key="index"
              >
                <router-link
                  :to="item.path"
                  :class="{
                    'active bg-warning text-white border-warning':
                      $route.path === item.path,
                  }"
                  class="nav-link"
                  >{{ item.name }}</router-link
                >
              </li>
            </template>
          </ul>
          <template v-if="isLoggedIn">
            <span>{{ pseudo }}</span>
            <button
              @click="logout"
              type="button"
              class="btn nav-link p-1 mt-3 text-muted ml-2"
            >
              se deconnecter
            </button>
          </template>
          <button
            v-else
            @click="$router.push({ name: 'Login' })"
            type="button"
            class="btn nav-link p-1 mt-3 text-muted"
          >
            se connecter
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AppNav",
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          path: "/",
          requireAuth: false,
        },
        {
          name: "Ajouter annonce",
          path: "/ads/add",
          requireAuth: true,
        },
      ],
    };
  },
  computed: {
    ...mapState("auth", {
      isLoggedIn: (state) => state.status.loggedIn,
      pseudo: (state) => state.user.name,
    }),
  },
  methods: {
    ...mapActions("auth", {
      logout: "LOGOUT",
    }),
  },
};
</script>

<style></style>
