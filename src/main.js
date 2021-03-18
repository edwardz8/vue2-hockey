import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './index.css'
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css"
// import { createProvider } from './vue-apollo'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'
import VueApollo from '@vue/apollo-option'

Vue.use(VueApollo)

Vue.config.productionTip = false

const getHeaders = () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "Application/json",
  }
  const token = window.localStorage.getItem('ma3UdEKFb5zs0K0yyl019ahX6x3wC4k1Ra1MDCMeEj9d0W8fyaQHE576Y6193tTk')
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return headers
}

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://ethical-ostrich-26.hasura.app/v1/graphql',
  fetch,
  headers: getHeaders()
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  apollo: { // Apollo specific options
  },
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')