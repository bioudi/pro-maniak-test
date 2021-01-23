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
            <li class="nav-item mx-2">
              <router-link
                to="/"
                :class="{
                  'active bg-warning text-white border-warning':
                    $route.path === '/'
                }"
                class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item mx-2">
              <router-link
                to="/ads/add"
                :class="{
                  'active bg-warning text-white border-warning':
                    $route.path === '/ads/add'
                }"
                class="nav-link"
                >Ajouter annonce</router-link
              >
            </li>
          </ul>
          <button type="button" class="btn nav-link p-1 mt-3 text-muted">
            se déconnecter
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppNav"
};
</script>

<style></style>
