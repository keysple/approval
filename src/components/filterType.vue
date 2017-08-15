<template>
  <div>
    <div class="header-filter" >
      <div style="text-align: left; height: 40px;line-height: 40px">
        <div class="filter-header"></div>
        <span>类型</span>
      </div>
      <div>
        <mu-raised-button :label="item.name" class="filter-button" v-for="item  ,index in typeList" :key="index"
                          :id="item.name"
                          backgroundColor="#f4f4f4" color="#666666" style="font-size: 15px" @click="filterEvent(item)">
        </mu-raised-button>
      </div>
      <mu-raised-button label="确定" class="filter-fixed" primary fullWidth style="font-size: 18px;"
                        @click="typeChange" backgroundColor="#38adff"></mu-raised-button>
    </div>
<!--    <div v-show="isTodoShow">
      <todo-item :TodoList="todoList"></todo-item>
    </div>-->
  </div>
</template>
<script>
  import TodoItem from "./todoItem";
  export default{
    components: {TodoItem},
    name: 'filterType',
    data(){
      return {
        typeList: [{
          name: '全部'
        }, {
          name: '出差'
        }, {
          name: '采购'
        }, {
          name: '外出'
        }
        ],
        todoList: [],
        type: ''
      }
    },
    methods: {
      typeChange(){
        this.$parent.tab1Header = true;
        this.$parent.tab1Filter = !this.$parent.tab1Filter;
        this.$parent.tab1Todo = !this.$parent.tab1Todo;
        this.$parent.tab2Header = true;
        this.$parent.tab2Filter = !this.$parent.tab2Filter;
        this.$parent.tab2Todo = !this.$parent.tab2Todo;
        this.$emit('updateFilter',this.type);
      },
      filterEvent(val){
        this.type = val.name;
       /* event.target.style.color="#44444"*/
      },
    },
  }
</script>
<style scoped="">
  .filter-button {
    width: 40%;
    margin: 10px;

  }

  .filter-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px
  }

  .filter-header {
    margin-left: 10px;
    background: #17c295;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    display: inline-block;
  }
</style>
