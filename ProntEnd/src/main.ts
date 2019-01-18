import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
import("./assets/vendor/bootstrap/css/bootstrap.min.css");
import("./assets/vendor/metisMenu/metisMenu.min.css");
import("./assets/vendor/datatables-plugins/dataTables.bootstrap.css");
import("./assets/vendor/datatables-responsive/dataTables.responsive.css");
import("./assets/dist/css/sb-admin-2.css");
import("./assets/vendor/font-awesome/css/font-awesome.min.css");

import jQuery from 'jquery';
import dataTables from 'vuejs-datatable';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
