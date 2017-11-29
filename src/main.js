/* eslint-disable */
import Vue from 'vue';
import App from './App';
import router from './router';

import neo4jVue from './plugins/vue-neo4j';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'vis/dist/vis.css';

Vue.use(neo4jVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
