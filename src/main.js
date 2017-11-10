import '../css/main.css'
import Vue from 'vue'
import App from './App.vue'

window._ = require('lodash');


new Vue({
	el: "#app",
	render: h => h(App)
});