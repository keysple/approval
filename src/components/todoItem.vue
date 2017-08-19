<template>
  <div>
    <div>
      <div class="demo-grid" v-for="item  in TodoList" :key="item.agentId" @click="gotoCallbackUrl(item.callbackUrl)"
           v-if="TodoList">
        <div class="approval-img">
          <img :src="item.appLogo" style="width: 100%;height: 100%"/>
        </div>
        <div class="approval-text">
          <p class="title">{{item.title}}</p>
          <p class="subtitle">发起人:{{item.sponsorUserName}}</p>
          <p class="subtitle">发送时间:{{FormatUnixTime(item.startTime)}}</p>
        </div>
        <div v-show="waitstate===true">
          <div v-if="item.timeout">
            <div class="type-timeOut"></div>
            <div class="type-timeOut-text">超时</div>
          </div>
          <div v-else-if="item.timeout===false&&item.level===1">
            <div class="type-hot"></div>
            <div class="type-hot-text">紧急</div>
          </div>
          <div v-else="item.timeout===false&&item.level===0">
            <div class="type-wait"></div>
            <div class="type-wait-text">待办</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="TodoList.length<1">
      <img src="../assets/empty-search.svg" width="200" height="200"/>
      <p id="message">{{message}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'todoItem',
    props: [
      'TodoList',
      'waitState'
    ],
    data(){
      return {
        config: this.Config,
        message: '当前没有待办事务',
        isMessage: false,
        waitstate: this.waitState
      }
    },
    mounted: function () {
    },
    methods: {
      gotoCallbackUrl(url){
        window.open(url, '_self')
      },
      FormatUnixTime (unixtime) {
        var date = new Date(unixtime);
        var commonTime = date.toLocaleString();
        return commonTime;
      },
    }
  }
</script>
<style scoped="">
  .demo-grid {
    height: 116px;
    position: relative;
    margin-top: 16px;
    margin-left: 12px;
  }

  .approval-img {
    display: inline-block;
    float: left;
    width: 34px;
    height: 34px;
    background: #999999;
    border-radius: 5px;

  }

  .approval-text {
    float: left;
    display: inline-block;
    padding-left: 21px;
    padding-bottom: -16px;
  }

  .title {
    font-size: 16px;
    color: #2d2d2d;
    text-align: left;
    line-height: 22px;
    margin-top: 0;
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

  .type-hot {
    width: 0;
    height: 0;
    float: right;
    border-top: 30px solid red;
    border-left: 30px solid transparent;
    z-index: 3;
  }
  .type-hot-text {
    float: right;
    position: relative;
    top: 20px;
    color: #ff8a80;
  }
  .type-wait {
    width: 0;
    height: 0;
    float: right;
    border-top: 30px solid green;
    border-left: 30px solid transparent;
    z-index: 2;
  }
  .type-wait-text {
    float: right;
    position: relative;
    top: 20px;
    color: #81c784;
  }
  .type-timeOut {
    width: 0;
    height: 0;
    float: right;
    border-top: 30px solid darkgrey;
    border-left: 30px solid transparent;
    z-index: 4;
  }

  .type-timeOut-text {
    float: right;
    position: relative;
    top: 20px;
    color: #bdbdbd;
  }
</style>
