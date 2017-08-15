<template>
  <div class="header">
    <div class="header-button">
      <div class="button" @click="changeTab1">
        <img src="../assets/搜索.png" height="20" width="20"/><span
        style="font-size:14px;color:#666666;text-align:left;padding-left: 6px;">搜索</span>
      </div>
      <div class="button" @click="changeTab2">
        <img src="../assets/筛选.png" height="20" width="20"/><span
        style="font-size:14px;color:#666666;text-align:left;padding-left: 6px;">筛选</span>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>
<script>
  export default{
    name: 'headerButton2',
    props: {
      tabId: String,
    },
    data(){
      return {
        value: '',
        tabid: this.tabId,
      }
    },
    methods: {
      changeTab1(){
        this.$parent.tab2Header = false;
        this.$parent.tab2Search = true;
        this.$parent.tab2Todo = false;
      },
      changeTab2(){
        this.$parent.tab2Header = false;
        this.$parent.tab2Filter = true;
        this.$parent.tab2Todo = false;
      }
    }
  }
</script>
<style>
  .header {
    background: #ffffff;
    width: 100%;
    height: 48px;

  }

  .header-button {
    margin: 14px;
  }

  .button {
    width: 49%;
    display: inline-block;
  }

  .divider {
    border: 1px solid #f0f0f0;
    width: 100%;
    height: 0px;
  }

</style>
