import Vue from 'vue'
import Vuex from 'vuex'
import jokes from './modules/jokes'
import snackbar from './modules/snackBar'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        jokes,
        snackbar
    },
    mutations: {
        //retrive Favourites Jokes from storage
        initialiseStore(state) {
			if(localStorage.getItem('store') != undefined) {
                let store = JSON.parse(localStorage.getItem('store'));
                state.jokes.favouritesList = store;
			}
		}
    }
})
