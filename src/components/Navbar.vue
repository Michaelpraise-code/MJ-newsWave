<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

// Placeholder logo (replace with your logo in public/)
import image from '@/assets/images/image.jpg'

const store = useStore()
const search = ref('')
const isMenuOpen = ref(false)

// Debounce search to avoid excessive updates
const debounce = (fn, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

const onSearch = debounce(() => {
  console.log('Search query:', search.value)
  store.commit('SET_SEARCH_QUERY', search.value)
}, 300)

const clearSearch = () => {
  search.value = ''
  store.commit('SET_SEARCH_QUERY', '')
  onSearch()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Enter') {
    onSearch()
  }
}
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar shadow-sm bg-primary">
      <div class="navbar-container">
        <div class="navbar-brand d-flex align-items-center">
          <img :src="image" alt="MJ NewsWave Logo" class="logo-img me-2" />
          <RouterLink to="/" class="fw-bold text-white text-decoration-none">MJ NewsWave</RouterLink>
        </div>
        <button
        
          class="menu-toggle"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon :icon="isMenuOpen ? 'times' : 'bars'" />
        </button>
        <ul class="nav-links" :class="{ 'nav-links-open': isMenuOpen }">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="closeMenu" aria-label="Home">
              <font-awesome-icon icon="home" class="nav-icon" /> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/category/technology" @click="closeMenu" aria-label="Technology">
              <font-awesome-icon icon="microchip" class="nav-icon" /> Technology
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/category/business" @click="closeMenu" aria-label="Business">
              <font-awesome-icon icon="briefcase" class="nav-icon" /> Business
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" @click="closeMenu" aria-label="About">
              <font-awesome-icon icon="info-circle" class="nav-icon" /> About
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" @click="closeMenu" aria-label="Contact">
              <font-awesome-icon icon="envelope" class="nav-icon" /> Contact
            </RouterLink>
          </li>
          <li class="nav-item search-mobile">
            <div class="d-flex align-items-center">
              <input
                class="form-control search-input"
                type="search"
                placeholder="Search news..."
                v-model="search"
                @input="onSearch"
                @keydown="handleKeydown"
                aria-label="Search"
              />
              <button class="btn btn-search" @click="onSearch">
                <font-awesome-icon icon="search" />
              </button>
              <button
                v-if="search"
                class="btn btn-clear"
                @click="clearSearch"
                title="Clear search"
              >
                <font-awesome-icon icon="times" />
              </button>
            </div>
          </li>
        </ul>
        <div class="search-desktop d-flex align-items-center">
          <input
            class="form-control search-input"
            type="search"
            placeholder="Search news..."
            v-model="search"
            @input="onSearch"
            @keydown="handleKeydown"
            aria-label="Search"
          />
          <button class="btn btn-search" @click="onSearch">
            <font-awesome-icon icon="search" />
          </button>
          <button
            v-if="search"
            class="btn btn-clear"
            @click="clearSearch"
            title="Clear search"
          >
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
:root {
  --primary-color: #007bff; /* Blue primary color */
  --secondary-color: #17a2b8; /* Complementary blue shade */
}

.navbar {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-radius: 0 0 10px 10px;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
}

.logo-img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.1);
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-item {
  display: inline-block;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s, background-color 0.3s, transform 0.3s;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.1rem;
}

.search-input {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  outline: none;
}

.btn-search,
.btn-clear {
  border-radius: 20px;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  transition: all 0.3s ease;
}

.btn-search:hover,
.btn-clear:hover {
  background: #fff;
  color: var(--primary-color);
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}

.search-desktop {
  display: flex;
}

.search-mobile {
  display: none;
}

/* Small screens (mobile, up to 768px) */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--primary-color);
    flex-direction: column;
    gap: 0;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .nav-links-open {
    display: flex;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    padding: 1rem;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .search-desktop {
    display: none;
  }

  .search-mobile {
    display: flex;
    width: 100%;
    padding: 1rem 0;
  }

  .search-input {
    flex-grow: 1;
    margin-right: 0.5rem;
  }

  .navbar-container {
    padding: 0.75rem 1rem;
  }

  .navbar-brand {
    font-size: 1.3rem;
  }

  .logo-img {
    height: 30px;
    width: 30px;
  }
}

/* Medium screens (tablets, 769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.95rem;
  }

  .nav-icon {
    font-size: 1rem;
  }

  .navbar-brand {
    font-size: 1.4rem;
  }

  .logo-img {
    height: 35px;
    width: 35px;
  }

  .search-input {
    width: 200px;
  }
}

/* Large screens (desktops, 1025px and up) */
@media (min-width: 1025px) {
  .nav-links {
    gap: 2rem;
  }

  .nav-link {
    padding: 0.75rem 1rem;
  }

  .search-input {
    width: 250px;
  }
}
</style>