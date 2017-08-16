<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tabs" lineClass="highLine">
      <mu-tab value="tab1" style="font-size:16px;color:#000000;text-align:left;">待我审批的({{todos}})</mu-tab>
      <mu-tab value="tab2" style="font-size:16px;color:#000000;text-align:left;">我已审批的</mu-tab>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <header-button v-show="tab1Header"></header-button>
      <search v-show="tab1Search" ref="tabSearch" :State=0></search>
      <filter-type v-show="tab1Filter" ref="tabFilter" @updateFilter="updateFilter1"></filter-type>
      <todo-item v-show="tab1Todo" :TodoList="tab1TodoList"></todo-item>
    </div>
    <div v-if="activeTab === 'tab2'">
      <header-button2 v-show="tab2Header"></header-button2>
      <search v-show="tab2Search" ref="tabSearch" :State=1></search>
      <filter-type v-show="tab2Filter" ref="tabFilter" @updateFilter="updateFilter2"></filter-type>
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
  import {host, timestamp} from '../util/host'
  import config from '../util/config'
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
        todos: 0,
        tab1Search: false,
        tab1Filter: false,
        tab1Todo: true,
        tab2Search: false,
        tab2Filter: false,
        tab2Todo: true,
        tab2Header: true,
        tab1Header: true,
        tab1TodoList: [],
        tab2TodoList: []
      }
    },
    mounted: function () {
      this.initApp();
    },
    methods: {
      initApp(){
        const self = this;
        config.getAccessToken().then(function (response) {
            console.log(response.data)
          /*        var result = response.data;
           self.$store.dispatch("addInfo", result);*/
     /*     this.getTodoList(0);
          this.getTodoList(1);*/
          self.$refs.tabFilter.getTypeList();
        });
      },
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
        this.$refs.tabSearch.init();
      },
      getTodoList(State) {
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/filter',
          params: {
            userid: '12216103111696',
            state: State,
            level: '',
            timestamp: timestamp,
            ACCESS_TOKEN: ''
          }
        };
        this.$http(Config).then(function (response) {
          if (State === 0) {
            this.$set(this, 'tab1TodoList', response.data)
          } else {
            this.$set(this, 'tab2TodoList', response.data)
          }
          console.log(response.data);
        }).catch(function (error) {
        });
      },
      updateFilter1(type){
        this.tab1TodoList = [];
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/filter',
          params: {
            userid: '12216103111696',
            state: 0,
            agentId: type,
            timestamp: timestamp,
            ACCESS_TOKEN: ''
          }
        };
        this.$refs.tabFilter.initType();
        this.$http(Config).then(function (response) {
          this.$set(this, 'tab1TodoList', response.data.data);
          this.$set(this, 'todos', response.data.data.length);
          console.log(response.data);
        }).catch(function (error) {
        });
      },
      updateFilter2(type){
        this.tab2TodoList = [];
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/filter',
          params: {
            userid: '12216103111696',
            state: 1,
            agentId: type,
            timestamp: timestamp,
            ACCESS_TOKEN: ''
          }
        };
        this.$refs.tabFilter.initType();
        this.$http(Config).then(function (response) {
          this.$set(this, 'tab2TodoList', response.data.data);
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
