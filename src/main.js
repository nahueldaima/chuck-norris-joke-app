import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

//Save store item to Local Storage
store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state.jokes.favouritesList));
});


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

