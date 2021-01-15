/* 
  * 我们要创建这个操作state,管理state的仓库
*/

//todo 1. 引入插件
import Vue from 'vue'
import Vuex from 'vuex'

//todo 2. 激活插件
Vue.use(Vuex)

//todo 3. 创建仓库实例
// const store = new Vuex.Store(options)
const store = new Vuex.Store({
  //? 用法一： 不进行数据分块，用于自己写写单个案例
      state: {
        lists: [
          {
            id: 1,
            d_title: '商品一'
          }
        ]
      },
      actions: {
        getLists (store,payload) {
          //!! 任务： 1. 定义动作   2. 发送动作  3. 接收负载
          //? store    就是store仓库实例
          //? payload  就是组件传递给actions的参数  有就写，没有就不写
          //? 动作名称  GET_LISTS 

          //todo1. 定义动作
          const action = {
            //todo type 动作的类型
            type: 'GET_LISTS',
            payload
          }

          //todo 2. 发送动作
          store.commit(action) //? 一发送就触发mutations中的方法了
        }
      },
      mutations: {
        //!! 任务  1. 修改数据 2. 接收参数
        //!! mutations中的方法名就是actions中创建的动作的名称
        //?  state 就是store中的state 
        //?  action 就是actions中方法发送过来的action
        GET_LISTS (state,action) {
          // console.log('mutations触发了',a)
          // console.log('mutations触发了',b)
          state.lists[0].d_title = action.payload
        }
      },
  //? 用法二： 进行数据分块 - 工作
    // modules: {
    //   team1: {
    //     state: {},
    //     actions: {},
    //     mutations: {},
    //   },
    //   team2: {
    //     state: {},
    //     actions: {},
    //     mutations: {},
    //   },
    //   team3: {
    //     state: {},
    //     actions: {},
    //     mutations: {},
    //   }
    // }
})

//todo 4. 导出store仓库实例
export default store 