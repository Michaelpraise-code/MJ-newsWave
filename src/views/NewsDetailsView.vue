<template>
  <div class="container">
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>

    <div v-else-if="news">
      <h2 class="mb-3">{{ news.title }}</h2>
      <img :src="news.image_url" class="img-fluid rounded mb-3" alt="news image" />
      <p class="text-muted">
        Published: {{ news.published_at }} | Source: {{ news.source }} | Categories:
        <!-- {{ news.categories.join(', ') }} -->
      </p>
      <p>{{ news.description }}</p>
      <a :href="news.url" class="btn btn-primary" target="_blank">Read Full Article</a>
    </div>

    <div v-else class="alert alert-danger mt-4">
      News article not found.
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()
const uuid = route.params.uuid

onMounted(() => {
  store.dispatch(' fetchNewsByUuid', uuid)
})

const news = computed(() => store.state.selectedNews)
const loading = computed(() => store.state.loading)
</script>
