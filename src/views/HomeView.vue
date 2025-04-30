<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'

const store = useStore()

// Fetch all news and headline news on component mount
onMounted(() => {
  store.dispatch('fetchAllNews')
  store.dispatch('fetchHeadlineNews')
})


// Get news and headline from store
const news = store.state.news
const headline = store.state.headline
</script>

<!-- views/HomeView.vue -->
<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Welcome to MJ NewsWave</h1>

    <!-- Headline News -->
    <div v-if="headline" class="mb-4">
      <h2>Headline News</h2>
      <news-card :news="headline" />
    </div>
<!--  -->

    <!-- Loading or Empty State -->
    <div v-else>
      <p>Loading news...</p>
    </div>
  </div>
  <NewsCard />
</template>
