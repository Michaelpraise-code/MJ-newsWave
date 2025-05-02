<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const loading = ref(false)

const selectedNews = computed(() => store.state.selectedNews)

onMounted(async () => {
  loading.value = true
  await store.dispatch('fetchNewsByUuid', route.params.uuid)
  loading.value = false
})
</script>

<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"> loading....</span>
      </div>
    </div>
    <div v-else-if="selectedNews">
      <img :src="selectedNews.image_url" class="img-fluid mb-3" :alt="selectedNews.title" />
      <h1>{{ selectedNews.title }}</h1>
      <p><strong>published:</strong>{{ selectedNews.published_at }}</p>
      <p><strong>source:</strong>{{ selectedNews.source }}</p>
      <p>{{ selectedNews.description }}</p>
      <a :href="selectedNews.url" target="_blank" class="btn btn-primary"> Read Full Article</a>
    </div>
    <div v-else>
      <p>News not found.</p>
    </div>
  </div>
</template>
