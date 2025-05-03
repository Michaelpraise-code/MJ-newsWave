<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'

// Initialize Vuex store
const store = useStore()

// Reactive state for loading
const loading = ref(false)

// Fetch news on mount
onMounted(async () => {
  console.log('Mounted: Fetching news...')
  console.log('Initial store state:', store.state)
  loading.value = true
  try {
    await Promise.all([store.dispatch('fetchHeadlineNews'), store.dispatch('fetchAllNews')])
  } catch (err) {
    console.error('Error fetching news:', err)
  } finally {
    loading.value = false
  }
})

// Computed properties
const headlineNews = computed(() => store.state.headlineNews)
// const headlineNews = computed(() => {
//   const news = store.state.headlineNews || []
//   console.log('Headline News:', news)
//   return Array.isArray(news) ? news : []
// })

const allNews = computed(() => {
  const news = store.state.allNews || []
  console.log('All News:', news)
  return news
})

const error = computed(() => store.state.error)

// Carousel slides (use headlineNews or fallback to allNews)
const carouselSlides = computed(() => {
  const slides = []
  const newsSource = headlineNews.value.length > 0 ? headlineNews.value : allNews.value
  const fallbackSlides = [
    {
      uuid: '1',
      title: 'Sample News 1',
      image_url: 'https://via.placeholder.com/800x400/007BFF/FFFFFF?text=Sample+News+1',
    },
    {
      uuid: '2',
      title: 'Sample News 2',
      image_url: 'https://via.placeholder.com/800x400/007BFF/FFFFFF?text=Sample+News+2',
    },
    {
      uuid: '3',
      title: 'Sample News 3',
      image_url: 'https://via.placeholder.com/800x400/007BFF/FFFFFF?text=Sample+News+3',
    },
  ]
  const source = newsSource.length > 0 ? newsSource : fallbackSlides
  for (let i = 0; i < Math.min(3, source.length); i++) {
    slides.push({
      image: source[i].image_url || 'https://via.placeholder.com/800x400?text=News+Image',
      title: source[i].title || 'News Title',
      uuid: source[i].uuid,
    })
  }
  return slides
})
</script>

<template>
  <div class="container my-5 animate-section">
    <!-- Headline News Carousel -->
    <div
      id="newsCarousel"
      class="carousel slide mb-5 carousel-custom"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in carouselSlides"
          :key="index"
          type="button"
          :data-bs-target="'#newsCarousel'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : 'false'"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in carouselSlides"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img
            :src="slide.image"
            class="d-block w-100 carousel-img"
            :alt="slide.title"
            @error="handleImageError"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.title }}</h5>
            <router-link
              v-if="slide.uuid"
              :to="`/news/${slide.uuid}`"
              class="btn btn-primary btn-gradient"
            >
              Read More
            </router-link>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#newsCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#newsCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Headline News -->
    <div v-if="headlineNews" class="mb-5 animate-section">
      <h2 class="section-title">Headline News</h2>
      <div class="card shadow-sm card-custom">
        <div class="card-img-overlay gradient-overlay"></div>
        <img :src="headlineNews.image_url" class="card-img-top" :alt="headlineNews.title" />
        <div class="card-body">
          <h3 class="card-title">{{ headlineNews.title }}</h3>
          <p class="card-text">{{ headlineNews.description }}</p>
          <router-link
            :to="`/news/${headlineNews.uuid}`"
            class="btn btn-primary btn-gradient stretched-link"
            >Read More</router-link
          >
        </div>
      </div>
    </div>

    <!-- All News -->
    <h2 class="section-title">All News</h2>
    <div v-if="loading" class="text-center animate-section">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger animate-section">
      {{ error }}
      <button class="btn btn-link" @click="retry">Try Again</button>
    </div>
    <div v-else class="row animate-section">
      <div
        v-for="news in allNews"
        :key="news.uuid || `all-${Math.random()}`"
        class="col-12 col-md-6 col-lg-4 mb-4"
      >
        <NewsCard :news="news" />
      </div>
      <div v-if="!allNews.length" class="col-12">
        <p class="text-muted text-center">No news found.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async retry() {
      this.loading.value = true
      try {
        await Promise.all([
          this.$store.dispatch('fetchHeadlineNews'),
          this.$store.dispatch('fetchAllNews'),
        ])
      } catch (err) {
        console.error('Retry error:', err)
      } finally {
        this.loading.value = false
      }
    },
    handleImageError(event) {
      event.target.src = '/placeholder.jpg'
    },
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
:root {
  --primary-color: #007bff; /* Blue primary color */
  --secondary-color: #17a2b8; /* Complementary blue shade */
}

/* Typography and Spacing */
.container {
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Georgia', serif;
}

/* Carousel */
.carousel-custom {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}
.carousel-img {
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.carousel-item:hover .carousel-img {
  transform: scale(1.05);
}
.carousel-caption {
  background: rgba(0, 0, 0, 0.75);
  padding: 15px;
  border-radius: 10px;
  bottom: 20px;
}
.carousel-caption h5 {
  font-size: 1.5rem;
  font-weight: 700;
}
.carousel-control-prev,
.carousel-control-next {
  width: 10%;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
}
.carousel-control-prev:hover,
.carousel-control-next:hover {
  background: rgba(0, 0, 0, 0.6);
}

/* Animations */
.animate-section {
  animation: fadeIn 1.2s ease-in;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .carousel-img {
    height: 350px;
  }
  .section-title {
    font-size: 1.8rem;
  }
}
@media (max-width: 768px) {
  .carousel-img {
    height: 300px;
  }
  .carousel-caption h5 {
    font-size: 1.2rem;
  }
}
@media (max-width: 576px) {
  .container {
    padding: 0 10px;
  }
  .carousel-img {
    height: 250px;
  }
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
