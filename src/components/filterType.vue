<template>
  <div class="header-filter">
    <div style="text-align: left; height: 40px;line-height: 40px">
      <div class="filter-header"></div>
      <span>类型</span>
    </div>
    <div>
      <mu-raised-button :label="item.name" class="filter-button" v-for="item  ,index in type" :key="index"
                        backgroundColor="#f4f4f4" color="#666666" style="font-size: 15px" >
      </mu-raised-button>
    </div>
    <mu-raised-button label="确定" class="filter-fixed" primary fullWidth style="font-size: 18px;"
                      backgroundColor="#38adff"></mu-raised-button>
  </div>
</template>
<script>
  export default{
    name: 'filterType',
    data(){
      return {
        type: [{
          name: '全部'
        }, {
          name: '出差'
        }, {
          name: '采购'
        }, {
          name: '外出'
        }
        ]
      }
    },
    method: {
    }
  }
</script>
<style scoped="">
  .filter-button {
    width: 40%;
    margin: 10px;

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
