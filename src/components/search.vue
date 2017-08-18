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
          <p>待办标题</p>
        </div>
        <div class="comment-detail">
          <img src="../assets/people.png" class="search-img"/>
          <p>发起人</p>
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
  import {host, timestamp, userid} from '../util/host'
  export default{
    components: {TodoItem},
    name: 'search',
    props: {
      State: Number,
    },
    data(){
      return {
        nameTitle: '',
        todoList: [],
        commentShow: true,
        todoShow: false,
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
        this.init();
      },
      inputChange() {
        this.todoList = [];
        this.commentShow = false;
        this.todoShow = true;
        var Config = {
          method: 'get',
          url: host + '/oapi/backlog/search',
          params: {
            userId: userid,
            state: this.State,
            timestamp: timestamp,
            access_token: this.$store.state.token,
            keyword: this.nameTitle,
          }
        };
        this.$http(Config).then(response => {
          console.log(response.data);
          this.$set(this, 'todoList', response.data.retData.data);
        }).catch(response => {
          console.log(response)
        });
      },
      init(){
        this.nameTitle = '';
        this.commentShow = true;
        this.todoShow = false;
      }
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
    line-height: normal;
    border: solid 1px #e0e0e0;
    border-radius: 5px;
    padding-left: 35px;
    vertical-align: middle;
  }

  input::placeholder {
    position: relative;
    line-height: normal;
    top: 3px;
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
