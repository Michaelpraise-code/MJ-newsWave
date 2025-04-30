import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state:{
        allNews:[],
    },
    getters:{

    },
    mutations:{
        setAllNews(state, allNews){
            state.allNews=allNews
        }
    },
    actions:{
        async fetchAllNews({commit}){
            const response = await axios.get('https://alvahtek.com/projects/ota/api/news-api/news.php')
            console.log(response)
            // commit('setAllNews', response.data);
        },
    }
})