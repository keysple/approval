<template>
  <div>
    <div class="demo-grid" v-show="showTodo" v-for="item  in todoList" :key="item.agentId" @click="gotoCallbackUrl(item.callbackUrl)"><!--v-for="item ,index in todoList" :key="index"-->
      <div class="approval-img">
      </div>
      <div class="approval-text">
        <p class="title">{{item.title}}</p>
        <p class="subtitle">发起人:{{item.fromUserName}}</p>
        <p class="subtitle">发送时间:{{item.startTime}}</p>
        <p class="result">{{item.callbackUrl}}</p>
      </div>
    </div>
    <div v-show="showBlank" class="empty">
      <img src="../assets/empty-search.svg"/>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'todoItem',
    props: [
      'TodoList'
    ],
    data(){
      return {
        todoList: [],
        config: this.Config,
        showTodo: true,
        showBlank: false,
      }
    },
    mounted: function () {
      if (this.todoList.length===0) {
        this.showTodo = false;
        this.showBlank = true;
      }
    },
    methods:{
      gotoCallbackUrl(url){
           window.location.href(url);
      }
    }
  }
</script>
<style>
  .demo-grid {
    height: 116px;
  }

  .approval-img {
    display: inline-block;
    float: left;
    margin-top: 16px;
    margin-left: 12px;
    width: 34px;
    height: 34px;
    background: #999999;
    border-radius: 5px;

  }

  .approval-text {
    float: left;
    display: inline-block;
    padding-left: 21px;
    position: relative;
  }

  .title {
    font-size: 16px;
    color: #2d2d2d;
    text-align: left;
    line-height: 22px;
    margin-bottom: 8px;
  }

  .subtitle {
    color: #77797c;
    font-size: 12px;
    margin: 0;
    text-align: left;
  }

  .result {
    font-size: 12px;
    color: #f27662;
    text-align: left;
  }
  .empty{
    margin-top: 40%;
  }
</style>
