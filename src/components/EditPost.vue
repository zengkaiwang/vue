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
        this.$router.push({path:"/home"});
      }  
    }

  }
</script>