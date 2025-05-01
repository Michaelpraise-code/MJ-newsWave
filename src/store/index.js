import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    allNews: [],
    headlineNews: [],
    selectedNews: {},
    categorizedNews: []
  },
  mutations: {
    SET_ALL_NEWS(state, news) {
      state.allNews = news;
    },
    SET_HEADLINE_NEWS(state, news) {
      state.headlineNews = news;
    },
    SET_SELECTED_NEWS(state, news) {
      state.selectedNews = news;
    },
    SET_CATEGORIZED_NEWS(state, news) {
      state.categorizedNews = news;
    }
  },
  actions: {
    async fetchAllNews({ commit }) {
      const res = await axios.get('https://alvahtek.com/projects/ota/api/news-api/news.php');
      commit('SET_ALL_NEWS', res.data);
    },
    async fetchHeadlineNews({ commit }) {
      const res = await axios.get('https://alvahtek.com/projects/ota/api/news-api/news.php?type=headline');
      commit('SET_HEADLINE_NEWS', res.data);
    },
    async fetchNewsByUuid({ commit }, uuid) {
      const res = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?uuid=${uuid}`);
      commit('SET_SELECTED_NEWS', res.data);
    },
    async fetchNewsByCategory({ commit }, category) {
      const res = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?category=${category}`);
      commit('SET_CATEGORIZED_NEWS', res.data);
    }
  }
});
