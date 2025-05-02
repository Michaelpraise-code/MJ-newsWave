<script setup>
import { computed } from 'vue'

const props = defineProps({
  news: {
    type: Object,
    required: true
  }
})

const truncatedTitle = computed(() => {
  const title = props.news.title || 'Untitled'
  return title.length > 60 ? title.slice(0, 60) + '...' : title
})

const truncatedDescription = computed(() => {
  const desc = props.news.description || 'No description available.'
  return desc.length > 100 ? desc.slice(0, 100) + '...' : desc
})
</script>

<template>
  <div class="card h-100 shadow-sm border-0">
    <img
      :src="news.image_url || '/placeholder.jpg'"
      class="card-img-top"
      :alt="news.title"
      @error="handleImageError"
    />
    <div class="card-body">
      <h5 class="card-title">{{ truncatedTitle }}</h5>
      <p class="card-text text-muted">{{ truncatedDescription }}</p>
      <router-link
        :to="`/news/${news.uuid}`"
        class="btn btn-danger stretched-link"
      >
        Read More
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleImageError(event) {
      event.target.src = '/placeholder.jpg'
    }
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>