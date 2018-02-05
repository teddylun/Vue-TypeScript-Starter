import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { hackerNews } from './modules/hackerNews/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    hackerNews
  },
  plugins: []
}) as Store<any>