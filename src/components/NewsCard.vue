<script setup>
import { computed, defineProps, onMounted } from 'vue'
import { createStore } from 'vuex'
import {useStore} from 'vuex'
const store = useStore();
const news = computed   (()=>{
  store.state.allNews
})
onMounted(async()=>{
  await store.dispatch('fetchAllNews')
})
// Define the props for the component
const props = defineProps({
  news: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="col-md-4 mb-4">
    <div class="card">
      <img v-if="news.image_url" :src="news.image_url" class="card-img-top" alt="News Image" />
      <div class="card-body">
        <h5 class="card-title">{{ news.title }}</h5>
        <p class="card-text">{{ news.description }}</p>
        <p class="card-text">
          <small class="text-muted">Published on: {{ news.published_at }}</small>
        </p>
        <router-link :to="`/news/${news.uuid}`" class="btn btn-primary">Read More</router-link>
      </div>
    </div>
  </div>
</template>
