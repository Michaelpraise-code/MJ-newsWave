<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'

// Initialize Vuex store
const store = useStore()

// State for carousel active index
const activeCarouselIndex = ref(0)

// Fetch news on mount
onMounted(async () => {
  console.log('Mounted: Fetching news...')
  console.log('Initial store state:', store.state)
  try {
    await Promise.all([store.dispatch('fetchHeadlineNews'), store.dispatch('fetchAllNews')])
  } catch (err) {
    console.error('Error fetching news:', err)
  }
})

// Computed properties
const headlineNews = computed(() => {
  const news = store.state.headlineNews || []
  console.log('Headline News:', news)
  return Array.isArray(news) ? news : []
})

const allNews = computed(() => {
  const news = store.state.allNews || []
  console.log('All News:', news)
  return news
})

const filteredNews = computed(() => {
  const news = store.getters.filteredNews || []
  console.log('Filtered News:', news)
  return news
})

const loading = computed(() => store.state.loading)
const error = computed(() => store.state.error)
</script>

<template>
  <div class="container-fluid px-0">
    <!-- Hero Section -->
    <section class="hero text-center text-white d-flex align-items-center justify-content-center">
      <div>
        <marquee behavior="slide" direction="up">
          <h1 class="display-4 fw-bold text-center">Welcome to MJ NewsWave</h1>
          <p class="lead">Your trusted source for the latest news!</p>
        </marquee>
      </div>
    </section>

    <!-- Headline News Carousel -->
    <section class="container my-5">
      <h2 class="text-center mb-4 fw-bold">Headline News</h2>
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else-if="error" class="alert alert-danger text-center">
        {{ error }}
        <button class="btn btn-link" @click="retry">Try Again</button>
      </div>
      <div v-else-if="headlineNews.length" class="carousel-container">
        <div id="headlineCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(news, index) in headlineNews"
              :key="news.uuid || `headline-${index}`"
              class="carousel-item"
              :class="{ active: index === activeCarouselIndex }"
            >
              <div class="card shadow-sm border-0">
                <img
                  :src="news.image_url || '/placeholder.jpg'"
                  class="card-img-top carousel-img"
                  :alt="news.title"
                  @error="handleImageError"
                />
                <div class="card-body">
                  <h3 class="card-title">{{ news.title }}</h3>
                  <p class="card-text text-muted">
                    {{ truncateDescription(news.description, 100) }}
                  </p>
                  <router-link :to="`/news/${news.uuid}`" class="btn btn-danger stretched-link">
                    Read More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#headlineCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#headlineCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div v-else class="alert alert-warning text-center">No headline news available.</div>
    </section>

    <!-- Latest News Grid -->
    <section class="container my-5">
      <h2 class="text-center mb-4 fw-bold">Latest News</h2>
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else-if="error" class="alert alert-danger text-center">
        {{ error }}
        <button class="btn btn-link" @click="retry">Try Again</button>
      </div>
      <div v-else-if="filteredNews.length" class="row g-4">
        <div
          v-for="news in filteredNews"
          :key="news.uuid || `news-${Math.random()}`"
          class="col-md-4 col-sm-6"
        >
          <NewsCard :news="news" />
        </div>
      </div>
      <div v-else class="alert alert-warning text-center">No news articles found.</div>
    </section>

    <!-- All News Section -->
    <section class="container my-5">
      <h2 class="text-center mb-4 fw-bold">All News</h2>
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else-if="error" class="alert alert-danger text-center">
        {{ error }}
        <button class="btn btn-link" @click="retry">Try Again</button>
      </div>
      <div v-else-if="allNews.length" class="row g-4">
        <div
          v-for="news in allNews"
          :key="news.uuid || `all-${Math.random()}`"
          class="col-lg-3 col-md-4 col-sm-6"
        >
          <div class="card h-100 shadow-sm border-0">
            <img
              :src="news.image_url || '/placeholder.jpg'"
              class="card-img-top"
              :alt="news.title"
              @error="handleImageError"
            />
            <div class="card-body">
              <h5 class="card-title">{{ truncateTitle(news.title, 50) }}</h5>
              <router-link
                :to="`/news/${news.uuid}`"
                class="btn btn-outline-danger btn-sm stretched-link"
              >
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="alert alert-warning text-center">No news articles found.</div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    // Retry fetching news
    async retry() {
      try {
        await Promise.all([
          this.$store.dispatch('fetchHeadlineNews'),
          this.$store.dispatch('fetchAllNews'),
        ])
      } catch (err) {
        console.error('Retry error:', err)
      }
    },
    // Handle broken images
    handleImageError(event) {
      event.target.src = '/placeholder.jpg'
    },
    // Truncate text for display
    truncateDescription(text, maxLength) {
      if (!text) return 'No description available.'
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    },
    truncateTitle(text, maxLength) {
      if (!text) return 'Untitled'
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    },
  },
}
</script>

<style scoped>
.hero {
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/src/assets/images/tech2.jpg') center/cover no-repeat;
  height: 400px;
}
.carousel-container {
  max-width: 800px;
  margin: 0 auto;
}
.carousel-img {
  height: 400px;
  object-fit: cover;
}
.card {
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}
.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
.alert {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  font-family: 'Georgia', serif;
  color: #333;
}
</style>
