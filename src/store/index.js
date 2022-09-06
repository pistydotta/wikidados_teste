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
      console.log(this.state.users)
      if (this.state.users.length == 0) {
        try {
          const response = await axios().get('/api/users?page=1')
          console.log(response)
          commit('SET_USERS', response.data.data)
        } catch (error) {
          console.log(error)
        }
      } else {
        return
      }
    },
    getUser: async function ({ commit }, userId) {
      let user = this.state.users.find(o => {
        return o.id == userId
      })
      return user
    },
    createUser: async function ({ commit }, user) {
      const ids = this.state.users.map(o => {
        return o.id
      })
      let largestId = Math.max(...ids)
      user.id = largestId + 1
      commit('ADD_USER', user)
    },
    editUser: async function ({ commit }, user) {
      console.log("User no edit:")
      console.log(user)
      let activeUsers = this.state.users.filter(o => {
        return o.id != user.id
      })
      activeUsers.push(user)
      activeUsers.sort((a, b) => {
        return a.id - b.id
      })
      commit('SET_USERS', activeUsers)
    },
    deleteUser: async function ({ commit }, userId) {
      let activeUsers = this.state.users.filter(o => {
        return o.id != userId
      })
      commit('SET_USERS', activeUsers)
    }
  },
  mutations: {
    ["SET_USERS"]: (state, users) => {
      state.users = users
    },
    ["ADD_USER"]: (state, user) => {
      state.users.push(user)
    }
  },

  modules: {
  }
})
