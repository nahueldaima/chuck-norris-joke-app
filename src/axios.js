import axios from 'axios'

// authInstance
const instance = axios.create({
  //baseURL: process.env.VUE_APP_DATABASE_URL
})

// instance.interceptors.request.use(config => {
//   if(config.auth) {
//     // let token = store.getters.GET_TOKEN || store.auth.token || store.token;
//     // config.headers.common['x-auth-token'] = token;
//   }
//   return config
// }, error =>{
//   return Promise.reject(error);
// });

instance.interceptors.response.use(res => {
  return res.data
}, error => {
//   if(error.response.status == 401) {
//     // store.dispatch('AUTH_LOGOUT');
//   }
  return Promise.reject(error)
})

export default instance