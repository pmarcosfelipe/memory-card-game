import '../css/main.css'
import Vue from 'vue'
import App from './App.vue'
import GameBoard from './GameBoard.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


Vue.use(VueResource);
Vue.use(VueRouter);

const NotFound = { template: '<p>Página não encontrada!</p>' }

window._ = require('lodash');

const routes = {
	'/': App,
	'/game-board': GameBoard
};

// new VueRouter({
//   routes: [
//     { path: '/post', component: App }
//     { path: '/game-board', component: GameBoard }
//   ],
// });


new Vue({
	el: "#app",
	// render: h => h(App)

	data: {
		currentRoute: window.location.pathname
	},

	computed: {
		ViewComponent () {
			return routes[this.currentRoute] || NotFound
		}
	},

	render (h) { return h(this.ViewComponent) }
});