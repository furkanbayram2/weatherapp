import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

var apiKey = "8592d6de4cb64da484ea3917ea5ba7d5";

export default new Vuex.Store({
  	state: {
		  data: [],
  	},
  	mutations: {
		  setData(state, data){
			state.data = data;
		  },
  	},
  	actions: {
		apiCall({commit}, city){
			axios.get("https://api.weatherbit.io/v2.0/forecast/daily?city="+ city + "&country=Turkey&days=5&lang=tr&key=" + apiKey)
		  	.then(response => {commit('setData', response.data.data)})
			;
		}
  	},
  	modules: {
 	}
})

