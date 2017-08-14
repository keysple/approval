<template>
  <div class="demo-grid">
    <div class="approval-img">
    </div>
    <div class="approval-text">
        <p class="title">关于成立省协同平台开发小组的通知</p>
       <p class="subtitle">发起人:张晓明</p>
      <p class="subtitle">发送时间:2017-08-10 21:42</p>
      <p class="result">审批拒绝</p>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'todoItem',
    data(){
      return {}
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
  .title{
    font-size:16px;
    color:#2d2d2d;
    text-align:left;
    line-height: 22px;
    margin-bottom: 8px;
  }
  .subtitle{
    color:#77797c;
    font-size: 12px;
    margin: 0;
    text-align: left;
  }
  .result{
    font-size:12px;
    color:#f27662;
    text-align:left;
  }
</style>
