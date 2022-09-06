import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    editUser: {}
  },
  actions: {
    getUsers: async function ({ commit }) {
      console.log("CHAMANDO!!")
      try {
        const response = await axios().get('/users')
        console.log(response)
        commit('SET_USERS', response.data.users)
      } catch (error) {
        console.log(error)
      }
    },
    getUser: async function ({ commit }, userId) {
      try {
        const response = await axios().get(`/users/${userId}`)
        return response.data
      } catch (error) {
        return error
      }
    },
    createUser: async function ({ commit }, user) {
      try {
        const response = await axios().post('/users', user)
        return response.data
      } catch (error) {
        return error
      }
    },
    editUser: async function ({ commit }, user) {
      console.log("User no edit:")
      console.log(user)
      try {
        const response = await axios().put(`/users/${user.userId}`, user.user)
        return response.data
      } catch (error) {
        return error
      }
    },
    deleteUser: async function ({ commit }, userId) {
      try {
        const response = await axios().delete(`/users/${userId}`)
        return response
      } catch (error) {
        return error
      }
    }
  },
  mutations: {
    ["SET_USERS"]: (state, users) => {
      state.users = users
    }
  },

  modules: {
  }
})
