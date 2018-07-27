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
        if(editId){
          //  编程式导航实现跳转，这里用 query 来传参，这样话话，新增页和修改页使用同一个路由就可以，不需要写两个路由
          this.$router.push({path:"/editPost",query:{id:editId}});
        }else{
          //  编程式导航实现跳转
          this.$router.push({path:"/editPost"});
        }        
          // this.$router.push({path:"/editPost"});
      }, 
      deletePost(id) {
        var url = '/flag/itemDelete'
        postResource.deletePost(url, id).then(res => {
          console.log('删除成功')
          this.$router.push({path: "/"})
        })
        .catch(err => {
          console.log(err)
        })
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