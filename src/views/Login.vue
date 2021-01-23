<template>
  <div class="container">
    <div class="row justify-content-center align-items-center pt-5">
      <div class="col-lg-4 col-md-6 col-sm-9 border pt-3 pb-5">
        <div class="mb-5 text-center">
          <a href="javascript:;">
            <img src="img/logo.png" alt="" class="mb-2" />
          </a>
          <h4>Connexion</h4>
        </div>
        <form
          method="post"
          novalidate="novalidate"
          @submit.prevent="login({ email, password })"
        >
          <div class="mb-5 text-left">
            <div class="form-group">
              <input
                type="email"
                placeholder="Adresse email"
                class="form-control"
                v-model="email"
              />
              <!----><!---->
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Mot de passe"
                class="form-control"
                v-model="password"
              />
              <!---->
            </div>
          </div>
          <button
            type="submit"
            class="btn rounded btn-warning btn-block text-white"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "utilisateur@promaniak.com",
      password: "Promaniak@1"
    };
  },
  methods: {
    ...mapActions("auth", {
      login: "LOGIN",
      logout: "LOGOUT"
    })
  }
};
</script>

<style></style>
