<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tabs" lineClass="highLine">
      <mu-tab value="tab1" style="font-size:16px;color:#000000;text-align:left;">待我审批的({{todos}})</mu-tab>
      <mu-tab value="tab2" style="font-size:16px;color:#000000;text-align:left;">我已审批的</mu-tab>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <header-button v-show="tab1Header"></header-button>
      <search v-show="tab1Search" :State=0 ></search>
      <filter-type v-show="tab1Filter" @updateFilter="updateFilter1" ></filter-type>
      <todo-item v-show="tab1Todo" :TodoList="tab1TodoList"></todo-item>
    </div>
    <div v-if="activeTab === 'tab2'">
      <header-button2 v-show="tab2Header"></header-button2>
      <search v-show="tab2Search" :State=1></search>
      <filter-type v-show="tab2Filter" @updateFilter="updateFilter2" ></filter-type>
      <todo-item v-show="tab2Todo" :TodoList="tab2TodoList"></todo-item>
    </div>
  </div>

</template>
<script>
  import HeaderButton from "./headerButton";
  import TodoItem from "./todoItem";
  import Search from "./search";
  import FilterType from "./filterType";
  import HeaderButton2 from "./headerButton2";
  export default {
    components: {
      HeaderButton2,
      FilterType,
      Search,
      TodoItem,
      HeaderButton,
    },
    name: 'index',
    data () {
      return {
        activeTab: 'tab1',
        todos: 2,
        tab1Search: false,
        tab1Filter: false,
        tab1Todo: true,
        tab2Search: false,
        tab2Filter: false,
        tab2Todo: true,
        tab2Header: true,
        tab1Header: true,
        tab1TodoList:[],
        tab2TodoList:[]
      }
    },
    mounted:function () {
      this.getTodoList(1);
      this.getTodoList(2);
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val;
        this.tab1Header = true;
        this.tab1Todo = true;
        this.tab1Filter = false;
        this.tab1Search = false;
        this.tab2Header = true;
        this.tab2Todo = true;
        this.tab2Filter = false;
        this.tab2Search = false;
      },
      getTodoList(State) {
        var Config = {
          method: 'get',
          url: '/oapi/backlog/filter',
          params: {
            userid: '1',
            state: State,
            level:''
          }
        };
        this.$http(Config).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
        });
      },
      updateFilter1(type){
        var Config = {
          method: 'get',
          url: '/oapi/backlog/filter',
          params: {
            userid: '3',
            state: 0,
            level:type,
          }
        };
        this.$http(Config).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
        });
      },
      updateFilter2(type){
        var Config = {
          method: 'get',
          url: '/oapi/backlog/filter',
          params: {
            userid: '3',
            state: 1,
            level:type,
          }
        };
        this.$http(Config).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
        });
      },
    }
  }
</script>
<style>
  .tabs {
    background: #f7f7f7;
    width: 100%;
    height: 48px;
    color: #2d2d2d;
  }

  .highLine {
    background-color: #38adff;
  }

  .titleClass {
    font-size: 16px;
    color: #000000;
    text-align: left;
  }
</style>
