<template>
  <div class="container">
    <h2 class="mb-4 text-capitalize">{{ category || 'Unknown Category' }} News</h2>

    <div v-if="!category" class="alert alert-danger">
      Invalid category specified.
    </div>
    <div v-else-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
    <div v-else-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    <div class="row" v-else>
      <div
        v-for="(news, index) in categorizedNews"
        :key="news.uuid || index"
        class="col-md-4 mb-4"
      >
        <NewsCard :news="news" />
      </div>
    </div>

    <div v-if="!categorizedNews.length && !loading && !error" class="alert alert-warning">
      No news found in this category.
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import NewsCard from '@/components/NewsCard.vue';

const route = useRoute();
const store = useStore();

const category = computed(() => {
  const cat = route.params.category;
  console.log('Category:', cat);
  return cat || 'general';
});

const loadCategoryNews = () => {
  console.log('Fetching news for category:', category.value);
  store.dispatch('fetchNewsByCategory', category.value).catch((err) => {
    console.error('fetchNewsByCategory error:', err);
  });
};

onMounted(() => {
  console.log('Mounted: Loading category news');
  loadCategoryNews();
});

watch(
  () => route.params.category,
  (newCategory) => {
    console.log('Route category changed:', newCategory);
    loadCategoryNews();
  }
);

const categorizedNews = computed(() => {
  const news = store.state.categorizedNews;
  console.log('Categorized News:', news);
  return news;
});

const loading = computed(() => {
  const isLoading = store.state.loading;
  console.log('Loading:', isLoading);
  return isLoading;
});

const error = computed(() => store.state.error);
</script>