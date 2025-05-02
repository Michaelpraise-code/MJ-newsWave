<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

const search = ref('')
const store = useStore()

const onSearch = () => {
  store.commit('SET_SEARCH_QUERY', search.value)
}
import image from '../assets/images/image.jpg'
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="logo">
        <img :src="image" alt="MJ NewsWave Logo" class="logo-img" />
      </div>
      <div class="container-fluid">
        <RouterLink class="navbar-brand fw-bold" to="/">MJ NewsWave</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li><RouterLink class="nav-link" to="/">Home</RouterLink></li>
            <li><RouterLink class="nav-link" to="/category/business">Business</RouterLink></li>
            <li><RouterLink class="nav-link" to="/category/technology">Technology</RouterLink></li>
            <li><RouterLink class="nav-link" to="/about">About</RouterLink></li>
            <li><RouterLink class="nav-link" to="/contact">Contact</RouterLink></li>
          </ul>
          <input
            class="form-control w-25"
            type="search"
            placeholder="Search news..."
            v-model="search"
            @input="onSearch"
          />
        </div>
      </div>
    </nav>
  </div>
  <div class="container-fluid alert alert-secondary">
    <RouterView />
  </div>
</template>
<style scoped>
.logo-img {
  height: 80px;
  width: 80px;
  border-radius: 50px;
}
</style>
