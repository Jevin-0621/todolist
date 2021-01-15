import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  actions: {
    getLists ({commit},{cid}) {
      //todo 发送请求
      axios.get('http://59.110.226.77:3000/api/list/hot',{
        params: {
          cid
        }
      }).then(res => {
        console.log(res)
        commit({
          type: 'GET_LISTS',
          payload: res.data.data.content
        })
      }).catch(error => Promise.reject(error))
     
    }
  },
  mutations: {
    GET_LISTS (state,{payload}) {
      state.lists = payload 
    }
  }
})