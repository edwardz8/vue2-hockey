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
import VueGtag from "vue-gtag";
/* import StoryblokVue from 'storyblok-vue'
Vue.use(StoryblokVue) */
Vue.use(VueApollo)
Vue.use(VueGtag, {
  config: { id: "UA-207280337-1" }
}, router);



/* import BlockContent from 'sanity-blocks-vue-component'
Vue.component('block-content', BlockContent); */

Vue.config.productionTip = false

const getHeaders = () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "Application/json",
  }
  const token = window.localStorage.getItem('0KDXheZ8pucFHRxlrPudZ3sNN5abkXahtDl3oAJzy7YoFYau2SqkWbN9eJUICG82')
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return headers
}

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://rotorink.hasura.app/v1/graphql',
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
  // BlockContent,
  render: h => h(App)
}).$mount('#app')