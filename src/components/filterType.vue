<template>
  <div>
    <div class="header-filter">
      <div class="header-type">
        <div style="text-align: left; height: 40px;line-height: 40px;">
          <div class="filter-header"></div>
          <span>类型</span>
        </div>
        <div>
          <mu-raised-button label="全部" class="filter-button indexButton" id="default" @click="clickAll"
                            style="color: #17c295">
          </mu-raised-button>
          <mu-raised-button v-for="item in typeList" :key="item.agentId"
                            :id="item.agentId" :label="item.name" class="filter-button indexButton"
                            @click="filterEvent(item)">
          </mu-raised-button>
        </div>
      </div>
      <div class="header-type">
        <div style="text-align: left; height: 40px;line-height: 40px">
          <div class="filter-header"></div>
          <span>级别</span>
        </div>
        <div>
          <mu-raised-button v-for="item  in levelList" :key="item.level"
                            :label="item.name" class="level-button indexButton" :id="item.level"
                            @click="filterLevel(item)">
          </mu-raised-button>
        </div>
      </div>
      <div>

        <mu-raised-button label="确定" class="filter-fixed" primary fullWidth style="font-size: 18px;"
                          @click="typeChange" backgroundColor="#38adff"></mu-raised-button>
      </div>
    </div>
  </div>
</template>
<script>
  import TodoItem from "./todoItem";
  import {host, timestamp} from  '../util/host'
  export default{
    components: {
      TodoItem
    },
    name: 'filterType',
    data(){
      return {
        typeList: [],
        levelList: [{
          name: '普通',
          level: 0
        }, {
          name: '紧急',
          level: 1
        }],
        todoList: [],
        agentId: '',
        defaultType: '',
        level: '',
        islevelSelected: false
      }
    },
    methods: {
      initType(){
        this.agentId = '';
        this.level = '';
      },
      typeChange(){
        this.$parent.tab1Header = true;
        this.$parent.tab1Filter = !this.$parent.tab1Filter;
        this.$parent.tab1Todo = !this.$parent.tab1Todo;
        this.$parent.tab2Header = true;
        this.$parent.tab2Filter = !this.$parent.tab2Filter;
        this.$parent.tab2Todo = !this.$parent.tab2Todo;
        var params = {
          agentId: this.agentId,
          level: this.level
        };
        this.$emit('updateFilter', params);
        var indexButton = document.getElementsByClassName('indexButton')
        for (var i = 0; i < indexButton.length; i++) {
          indexButton[i].style.color = '#666666';
        }
        document.getElementById('default').style.color = '#17c295';
      },
      filterEvent(val){
        this.agentId = val.agentId;
        var thisType = document.getElementById(val.agentId);
        var typeparentNode = thisType.parentNode;
        var typebroNode = typeparentNode.childNodes;
        for (var j = 0; j < typebroNode.length; j++) {
          if (typebroNode[j].tagName === 'BUTTON') {
            typebroNode[j].style.color = '#666666';
          }
        }
        thisType.style.color = '#17c295';
      },
      filterLevel(val){
        this.level = val.level;
        var thisLevel = document.getElementById(val.level);
        var levelparentNode = thisLevel.parentNode;
        var levelbroNode = levelparentNode.childNodes;
        for (var i = 0; i < levelbroNode.length; i++) {
          levelbroNode[i].style.color = '#666666';
        }
        thisLevel.style.color = '#ff9949';
      },
      clickAll(){
        var Default = document.getElementById('default');
        var defaultparentNode =Default.parentNode;
        var defaultbroNode= defaultparentNode.childNodes;
        for(var i=0;i<defaultbroNode.length;i++){
          if (defaultbroNode[i].tagName === 'BUTTON') {
            defaultbroNode[i].style.color = '#666666';
          }
        }
        Default.style.color = '#17c295';
      },
      getTypeList(){
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/registerList',
          params: {
            timestamp: timestamp,
            access_token: this.$store.state.token
          }
        };
        this.$http(Config).then(response => {
            this.$set(this, 'typeList', response.data.retData);
          }, response => {
            console.log(response)
          }
        )
      }
    },
  }
</script>
<style scoped="">
  .header-type {
    margin-left: 5%;
    width: 100%;
    float: left;
  }

  .filter-header {
    background: #17c295;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    display: inline-block;
  }

  .filter-button {
    display: inline-block;
    width: 40%;
    margin: 10px;
    height: 50px;
    border-radius: 9px;
    float: left;
    background-color: #f4f4f4;
    color: #666666;
    font-size: 15px
  }

  .level-button {
    display: inline-block;
    width: 40%;
    margin: 10px;
    height: 50px;
    border-radius: 9px;
    float: left;
    background-color: #f4f4f4;
    color: #666666;
    font-size: 15px
  }

  .filter-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px
  }
</style>
