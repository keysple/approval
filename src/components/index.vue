<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tabs" lineClass="highLine" style="background-color: #f7f7f7">
      <mu-tab value="tab1" style="font-size:16px;color:#000000;text-align:left;">待办事务({{todos}})</mu-tab>
      <mu-tab value="tab2" style="font-size:16px;color:#000000;text-align:left;">已办事务</mu-tab>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <header-button v-show="tab1Header"></header-button>
      <search v-show="tab1Search" ref="tabSearch" :State=0></search>
      <filter-type v-show="tab1Filter" ref="tabFilter" @updateFilter="updateFilter1"></filter-type>
      <todo-item v-show="tab1Todo" :TodoList="tab1TodoList" :waitState='wait'></todo-item>
    </div>
    <div v-if="activeTab === 'tab2'">
      <header-button2 v-show="tab2Header"></header-button2>
      <search v-show="tab2Search" ref="tabSearch" :State=1></search>
      <filter-type v-show="tab2Filter" ref="tabFilter" @updateFilter="updateFilter2"></filter-type>
      <todo-item v-show="tab2Todo" :TodoList="tab2TodoList" ></todo-item>
    </div>
  </div>
</template>
<script>
  import HeaderButton from "./headerButton";
  import TodoItem from "./todoItem";
  import Search from "./search";
  import FilterType from "./filterType";
  import HeaderButton2 from "./headerButton2";
  import {host, timestamp,userid} from '../util/host'
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
        tab2TodoList: [],
        wait:true,
      }
    },
    mounted: function () {
      this.initApp();
    },
    methods: {
      initApp(){
        const self = this;
        config.getAccessToken().then(function (response) {
          var token = response.data.retData.token;
          self.$store.dispatch("addInfo", token);
          self.getTodoList(0);
          self.getTodoList(1);
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
            userId: userid,
            state: State,
            level: '',
            timestamp: timestamp,
            access_token: this.$store.state.token,
          }
        };
        this.$http(Config).then(response => {
            if (Config.params.state== 0) {
              this.$set(this, 'tab1TodoList', response.data.retData.data);
              this.$set(this, 'todos', response.data.retData.data.length);
            } else {
              this.$set(this, 'tab2TodoList', response.data.retData.data);
            }
          }, response => {
            console.log(response)
          }
        )
      },
      updateFilter1(params){
        this.tab1TodoList = [];
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/filter',
          params: {
            userId: userid,
            state: 0,
            level:params.level,
            timestamp: timestamp,
            access_token: this.$store.state.token
          }
        };
        if(params.agentId!==''){
            Config.params.agentId=params.agentId;
        }

        this.$http(Config).then(response => {
          this.$set(this, 'tab1TodoList', response.data.retData.data);
          this.$refs.tabFilter.initType();
        }).catch(response => {
        });
      },
      updateFilter2(params){
        this.tab2TodoList = [];
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/filter',
          params: {
            userId: userid,
            state: 1,
            level:params.level,
            timestamp: timestamp,
            access_token: this.$store.state.token
          }
        };
        if(params.agentId!==''){
          Config.params.agentId=params.agentId;
        }
        this.$http(Config).then(response => {
          this.$set(this, 'tab2TodoList', response.data.retData.data);
          this.$refs.tabFilter.initType();
        }).catch(response => {
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

</style>
