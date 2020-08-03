import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS_TO_STATE: (s, users) => {
      s.users = users;
    }
  },
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios.get('http://localhost:3000/users').then(response => {
        commit('SET_USERS_TO_STATE', response.data);
        return response;
      }).catch(e => {
        console.error(e);
        return e;
      });
    }
  },
  modules: {
  },
  getters: {
    USERS(state) {
      return state.users;
    }
  }
});
