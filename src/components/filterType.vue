<template>
  <div>
    <div class="header-filter">
      <div style="text-align: left; height: 40px;line-height: 40px">
        <div class="filter-header"></div>
        <span>类型</span>
      </div>
      <div>
        <mu-raised-button :label="item.name" class="filter-button" v-for="item  ,index in typeList" :key="index"
                          id="item.agentId" backgroundColor="#f4f4f4" color="#666666" style="font-size: 15px"
                          @click="filterEvent(item)">
        </mu-raised-button>
      </div>
      <mu-raised-button label="确定" class="filter-fixed" primary fullWidth style="font-size: 18px;"
                        @click="typeChange" backgroundColor="#38adff"></mu-raised-button>
    </div>
  </div>
</template>
<script>
  import TodoItem from "./todoItem";
  import {host, timestamp} from  '../util/host'
  export default{
    components: {TodoItem},
    name: 'filterType',
    data(){
      return {
        typeList: [{
          name: '全部',
          agentId: '1',
          type: '',
          appIndex: '',
        }, {
          name: '出差',
          agentId: '2',
          type: '',
          appIndex: '',
        }, {
          name: '采购',
          agentId: '3',
          type: '',
          appIndex: '',
        }, {
          name: '外出',
          agentId: '4',
          type: '',
          appIndex: '',
        }
        ],
        todoList: [],
        agentId: '',
        defaultType: ''
      }
    },
    mounted: function () {
      this.initType();
    },
    methods: {
      initType(){
        this.agentId = this.typeList[0].agentId;
        this.defaultType = document.getElementsByClassName('filter-button')[0];
        this.defaultType.style.color = '#17c295';
      },
      typeChange(){
        this.$parent.tab1Header = true;
        this.$parent.tab1Filter = !this.$parent.tab1Filter;
        this.$parent.tab1Todo = !this.$parent.tab1Todo;
        this.$parent.tab2Header = true;
        this.$parent.tab2Filter = !this.$parent.tab2Filter;
        this.$parent.tab2Todo = !this.$parent.tab2Todo;
        this.$emit('updateFilter', this.agentId);
      },
      filterEvent(val){
        this.agentId = val.agentId;
        this.defaultType.style.color = '#666666';
      },
      getTypeList(){
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/registerList',
          params: {
            timestamp: timestamp,
            ACCESS_TOKEN: ''
          }
        };
        this.$http(Config).then(function (response) {
          this.$set(this, 'typeList', response.data.retData);
          console.log(response.data);
        }).catch(function (error) {
        });
      }
    },
  }
</script>
<style scoped="">
  .filter-button {
    width: 40%;
    margin: 10px;
    height: 50px;
    border-radius: 9px;
  }

  .filter-button :hover {
    color: #17c295;
    font-size: 15px;
    font-weight: bold;
    z-index: 4;
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
