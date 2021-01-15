<template>
  <div>
    <!-- 状态提升： 将子组件中的数据提升到父组件中定义和操作 -->
    <Tab :open-mask-flag="openMaskFlag" />
    <Content 
      :todos = "newTodos" 
      @change-flag = "changeFlag"
      @remove="remove"
      :open-mask-flag = "openMaskFlag"
    />
    <TabBar
      :type="type"
      @get-type = "changeType"
    />
    <MaskComp 
      v-if="maskFlag"
      :close-mask-flag="closeMaskFlag"
      @get="add"
      @update = "modify"
      :active-type = "activeType"
      :modify-default-val = "modifyDefaultVal"
      
    />
  </div>
</template>
<script>
import Tab from './components/Tab'
import Content from './components/Content'
import TabBar from './components/TabBar'
import MaskComp from './components/MaskComp'
export default {
  name: 'App',
  data () {
    return {
      todos: [
        {
          id: 1,
          task: '任务一',
          flag: false 
        }
      ],
      maskFlag: false,
      activeType: 'edit',
      modifyDefaultVal: '',
      activeId: 0,
      type: 'A'
    }
  },
  methods: {
    changeType (type) {
      this.type = type
    },
    modify (val) {
      this.todos.forEach(v => {
        if (v.id === this.activeId) {
          v.task = val
        }
      })
    },
    remove (id) {
      this.todos = this.todos.filter(v => v.id!==id)
    },
    changeFlag (id) {
      this.todos.forEach(v => {
        if (v.id === id) {
          v.flag = !v.flag
        }
      })
    },
    sortIdArr (arr) {
      if (!Array.isArray(arr)){
        return 
      }
      return arr.sort((a,b) => {
        return b.id - a.id
      })
    },
    add (task) {
      this.todos.push({
        id: this.sortIdArr(this.todos)[0].id + 1,
        task,
        flag: false
      })
    },
    openMaskFlag (e,task,id) {
      console.log(e) //e.target.dataset.type  
      // edit  --- 表示点击了编辑
      // modify -- 表示点击了修改
      if (e.target.dataset.type == 'modify') {
        this.modifyDefaultVal = task
        this.activeType = 'modify'
        this.activeId = id 
      } else {
        this.activeType = 'edit'
      }
      this.maskFlag = true
    },
    closeMaskFlag () {
      this.maskFlag = false 
    }
  },
  components: {
    Tab,Content,TabBar,MaskComp
  },
  computed: {
    newTodos () {
      switch (this.type) {
        case 'A':
          return this.todos 
        case 'F':
          return this.todos.filter(v => v.flag)
        case 'U':
          return this.todos.filter(v => !v.flag)
      
        default:
          return this.todos 
      }
    }
  }
}
</script>