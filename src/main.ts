import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

import VueApollo from 'vue-apollo'

import { apolloClient } from './vue-apollo'

import VueCompositionApi from "@vue/composition-api";

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})



const app = Vue.createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VueApollo, {
    apolloClient
  })
  
router.isReady().then(() => {
    provide(DefaultApolloClient, apolloClient);
    app.mount('#app');
});