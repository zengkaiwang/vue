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

    },
    methods: {
      save() {
        //新建数据
        var url = '/flag/posts/cteate'
        postResource.cteate(url, this.postVo).then(response =>{
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