<template>
  <div>
       <div>
           <div>
             <label>标题：</label>
             <div>
               <input type="email" v-model="postVo.title" placeholder="请输入内容"/>
             </div>
           </div>
           <div>
             <label>内容：</label>
             <div>
               <textarea v-model="postVo.description" rows="13"></textarea>
             </div>
           </div>
        </div>
      <div @click="save">保存</button></div>
  </div>
</template>

<script>
  import postResource from "@/resources/postResource";
  
  export default {
    name: 'EditPost',
    data() {
      return {
        postVo: {
          title: "",
          description: ""
        },
        dataList: [],
        id: ""
      }
    },
    created() {
      this.id = this.$route.query.id;
      //如果id存在，说明是编辑
      if (this.id) {
        var url = '/flag/getPostDetail'
        postResource.getPostDetail(url, this.id).then(res => {
          this.postVo = res.data;
        })
        .catch(err => {
          console.log(err)
        })
      }      
    },
    methods: {
      save() {
        //新建数据
        var url = '/flag/posts/create'
        postResource.create(url, this.postVo).then(response =>{
          console.log('response', response);
          if(response.data === '新建成功'){
            this.$router.push({path:"/home"});
          }else{
            console.log("保存失败");
          }
        }).catch(error => {
          console.log(error);
        })        
      }  
    }

  }
</script>