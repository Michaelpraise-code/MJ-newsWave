<template>
  <div class="container">
    <marquee class="marquee" behavior="slide" direction="up">
      <h2 class="text text-center text-white mt-5">Welcome to MJ NewsWave</h2>
      <p class="text text-center text-white mb-5">Your source for latest news!</p>
    </marquee>
    <h2 class="mb-4">Headline News</h2>
    <div v-if="loading" class="text-center mb-4">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
    <div v-else-if="error" class="alert alert-danger mt-4">
      {{ error }}
    </div>
    <div v-else-if="headlineNews && Object.keys(headlineNews).length">
      <NewsCard :news="headlineNews" />
    </div>
    <div v-else class="alert alert-warning mt-4">
      No headline news available.
    </div>

    <h2 class="my-4">Latest News</h2>
    <div v-if="loading" class="text-center mb-4">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
    <div v-else-if="error" class="alert alert-danger mt-4">
      {{ error }}
    </div>
    <div class="row" v-else>
      <div
        v-for="news in filteredNews"
        :key="news.uuid || Math.random()"
        class="col-md-4"
      >
        <NewsCard :news="news" />
      </div>
    </div>
    
      No news articles found.
    </div>
  
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import NewsCard from '@/components/NewsCard.vue';

const store = useStore();

onMounted(() => {
  console.log('Mounted: Fetching news...');
  console.log('Initial store state:', store.state);
  store.dispatch('fetchHeadlineNews').catch(err => console.error('fetchHeadlineNews error:', err));
  store.dispatch('fetchAllNews').catch(err => console.error('fetchAllNews error:', err));
});

const headlineNews = computed(() => {
  const news = store.state.headlineNews;
  console.log('Headline News:', news);
  return news;
});

const filteredNews = computed(() => {
  const news = store.getters.filteredNews;
  console.log('Filtered News:', news);
  return news;
});

const loading = computed(() => {
  const isLoading = store.state.loading;
  console.log('Loading:', isLoading);
  return isLoading;
});

const error = computed(() => store.state.error);
</script>

<style scoped>
.marquee {
  background-image: url(src/assets/images/tech2.jpg);
  font-family: Georgia, serif;
}
</style>