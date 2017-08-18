<template>
  <div>
    <div>
      <div class="demo-grid" v-for="item  in TodoList" :key="item.agentId" @click="gotoCallbackUrl(item.callbackUrl)"
           v-if="TodoList">
        <div class="approval-img">
          <img :src="item.appLogo"/>
        </div>
        <div class="approval-text">
          <p class="title">{{item.title}}</p>
          <p class="subtitle">发起人:{{item.sponsorUserName}}</p>
          <p class="subtitle">发送时间:{{FormatUnixTime(item.startTime)}}</p>
          <p class="result">{{item.timeout}}</p>
        </div>
        <div class="type-hot" v-if="item.level===1"></div>
        <div class="type-normal" v-if="item.level===0"></div>
      </div>
    </div>

    <div class="empty" v-if="TodoList.length<1">
      <img src="../assets/empty-search.svg"/>
      <p>没有内容，请重新选择条件</p>
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
        config: this.Config,
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
      }
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
    margin-top: 0px;
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

  .empty {
    padding-top: 40%;
  }

  .type-hot {
    width: 0;
    height: 0;
    float: right;
    border-top: 30px solid #ff9949;
    border-left: 30px solid transparent;
    z-index: 10;
  }

  .type-normal {
    width: 0;
    height: 0;
    float: right;
    border-top: 30px solid #6dcdf5;
    border-left: 30px solid transparent;
    z-index: 10;
  }

</style>
