<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tabs">
      <mu-tab value="tab1" style="font-size:16px;color:#000000;text-align:left;">待我审批的({{todos}})</mu-tab>
      <mu-tab value="tab2" style="font-size:16px;color:#000000;text-align:left;">我已审批的</mu-tab>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <header-button></header-button>
     <!-- <search></search>-->
   <filter-type></filter-type>
 <!--     <todo-item></todo-item>-->
    </div>
    <div v-if="activeTab === 'tab2'">
      <header-button></header-button>
    </div>
  </div>

</template>
<script>
  import HeaderButton from "./headerButton";
  import TodoItem from "./todoItem";
  import Search from "./search";
  import FilterType from "./filterType";
  export default {
    components: {
      FilterType,
      Search,
      TodoItem,
      HeaderButton,
    },
    name: 'index',
    data () {
      return {
        activeTab: 'tab1',
        todos: 2,
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
    }
  }
</script>
<style scoped>
  .tabs {
    background: #f7f7f7;
    width: 100%;
    height: 48px;
    color: #2d2d2d;
  }

</style>
