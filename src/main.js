import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
//import "axios";

//Vue.use(Importazione che vogliamo elaborare);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
