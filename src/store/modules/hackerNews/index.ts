import axios, { AxiosResponse } from 'axios'
import { GetterTree, MutationTree, ActionTree, Module } from 'vuex'
import { HackerNewsState } from './types'

export const state: HackerNewsState = {
  news: []
}

export const getters: GetterTree<HackerNewsState, any> = {
  news: state => state.news
}

export const actions: ActionTree<HackerNewsState, any> = {
  GET_HACKER_NEWS: async ({ commit }) => {
    try {
      let results: AxiosResponse<any>
      results = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
      commit('GET_HACKER_NEWS', results.data)
      console.log('hah')
      return results
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export const mutations: MutationTree<HackerNewsState> = {
  GET_HACKER_NEWS (state, payload) {
    state.news = payload
  }
}

export const hackerNews: Module<HackerNewsState, any> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}