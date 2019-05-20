import Vue from 'vue'
import Vuex from 'vuex'
import jokes from './modules/jokes'
import snackbar from './modules/snackBar'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: false
    },
    modules: {
        jokes,
        snackbar
    },
    mutations: {
        //retrive Favourites Jokes from storage
        STORE_INIT(state) {
            if (localStorage.getItem('store') != undefined) {
                let store = JSON.parse(localStorage.getItem('store'));
                state.jokes.favouritesList = store;
            }
            if (localStorage.getItem('auth') != undefined) {
                state.auth = JSON.parse(localStorage.getItem('auth'));
            }
        },
        LOG_IN(state) {
            state.auth = true;
        },
        LOG_OUT(state) {
            state.auth = false;
            state.jokes.jokesList = [];
        },
    },
    getters: {
        GET_AUTH_STATE(state) {
            return state.auth;
        }
    }
})
