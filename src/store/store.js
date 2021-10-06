import Vue from 'vue'
import Vuex from 'vuex'

import data from './modules/data.modules'

Vue.use(Vuex)

 export const store = new Vuex.Store({
     modules: {
         data
     }
 }) 

