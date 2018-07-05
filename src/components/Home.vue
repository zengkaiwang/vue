<template>
  <div>
  <div>
    <button @click="edit()">新增</button>
  </div>
  <ul>
    <li v-for="item in dataList">
      <h3 @click="detailPost(item._id)">{{item.title}}</h3>
      <p>{{item.description}}</p>
      <button @click="deletePost(item._id)">删除</button>
      <button @click="edit(item._id)">修改</button>
    </li>
  </ul>
  </div>
</template>

<script>
  import postResource from "@/resources/postResource";


  export default {
    name: 'Home',
    data () {
      return {
        dataList:[]
      }
    },
   created(){
      this.getPosts()
    },
    methods:{
      getPosts(){
        var url = '/flag/home/getAllData'
        postResource.getPostList(url).then(response => {
          this.dataList = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      },
      edit(editId){
        this.$router.push({path:"/editPost"});
      }, 
      deletePost(id) {

      }
    }
  }
</script>

<style scope>
  ul{
    padding: 0
  }
  ul li{
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    list-style: none;
  }
  ul li h3{
    cursor: pointer;
  }
  button{
    background: transparent;
    border: 1px solid #ccc;
    padding: 5px 18px;
    cursor: pointer;
  }
  h3{
    padding: 10px 0
  }
</style>