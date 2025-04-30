<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- components/NavBar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">MJ News Hub</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="categoryDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="categoryDropdown">
              <li>
                <RouterLink class="dropdown-item" to="/news/category/business">Business</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/news/category/technology"
                  >Technology</RouterLink
                >
              </li>
              <!-- Add more categories as needed -->
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About Us</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
