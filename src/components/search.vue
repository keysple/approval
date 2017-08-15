<template>
  <div>
    <div class="header-search">
      <i class="search-icon"><img src="../assets/search.svg" width="30" height="30"/></i>
      <input placeholder="搜索标题、发起人" class="search-button" v-model="nameTitle" @change="inputChange"/>
      <div class="search-cancel" @click="cancelSearch"><span>取消</span></div>
    </div>
    <div class="search-comment" v-show="commentShow">
      <p class="search-comment-text">在这里可以搜索到</p>
      <div class="search-comment-icon">
        <div class="comment-detail">
          <img src="../assets/审批标题.png" class="search-img"/>
          <p>审批标题</p>
        </div>
        <div class="comment-detail">
          <img src="../assets/审批编号.png" class="search-img"/>
          <p>审批编号</p>
        </div>
        <div class="comment-detail">
          <img src="../assets/正文内容.png" class="search-img"/>
          <p>正文内容</p>
        </div>
        <div class="comment-detail">
          <img src="../assets/审批意见.png" class="search-img"/>
          <p>审批意见</p>
        </div>
      </div>

    </div>
    <div v-show="todoShow">
      <todo-item :TodoList="todoList" ></todo-item>
    </div>
  </div>
</template>
<script>
  import TodoItem from "./todoItem";
  export default{
    components: {TodoItem},
    name: 'search',
    props:{
      State:Number,
    },
    data(){
      return {
        nameTitle: '',
        todoList:[],
        commentShow:true,
        todoShow:false,
      }
    },
    methods: {
      cancelSearch  (){
        this.$parent.tab1Header = !this.$parent.tab1Header;
        this.$parent.tab1Search = !this.$parent.tab1Search;
        this.$parent.tab1Todo = !this.$parent.tab1Todo;
        this.$parent.tab2Header = !this.$parent.tab2Header;
        this.$parent.tab2Search = !this.$parent.tab2Search;
        this.$parent.tab2Todo = !this.$parent.tab2Todo;
        this.nameTitle='';
      },
      inputChange() {
          this.commentShow=false;
          this.todoShow=true;
        var Config = {
          method: 'get',
          url: '/oapi/backlog/search',
          params: {
            userid: '2',
            state: this.State,
            title:this.nameTitle,
            name:this.nameTitle
          }
        };
        this.$http(Config).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
        });
      },
    }
  }
</script>
<style scoped>
  .header-search {
    width: 100%;
    color: #38adff;
    background: #f7f7f7;
    height: 45px;
    line-height: 45px;
  }

  .search-button {
    position: relative;
    width: 85%;
    height: 30px;
    border: solid 1px #e0e0e0;
    border-radius: 5px;
    padding-left: 35px;
  }

  .header-search span {
    width: 28px;
    font-size: 14px;
    color: cornflowerblue;
  }

  .search-icon {
    text-align: center;
    z-index: 5;
    position: absolute;
    padding-left: 5px;
    padding-top: 10px;
  }

  .search-comment {
    width: 100%;
    margin-top: 50px;
  }

  .search-comment-text {
    font-size: 14px;
    color: #b6b6b6;
    text-align: center;
  }

  .search-comment-icon {
    /*  margin-left: 50px;*/
    text-align: center;
    margin-top: 24px;
  }

  .comment-detail {
    display: inline-block;
    color: #b6b6b6;
    text-align: center;
    font-size: 12px;
    padding: 10px;
  }

  .comment-detail img {
    height: 24px;
  }

  .comment-detail p {
    margin: 0;
  }

  .search-cancel {
    display: inline;
  }
</style>
