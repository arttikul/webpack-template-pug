// JS
import './js';

// SCSS
import './assets/scss/main.scss';

// CSS (example)
// import './assets/css/main.css'

// Vue.js
import Vue from 'vue';

window.Vue = Vue;

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default);

// Vue init
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
});
