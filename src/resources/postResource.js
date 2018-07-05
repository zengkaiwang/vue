
import Vue from 'vue'

let userResource = {
		//获取所有数据
	  getPostList:function(url){
	    	return Vue.http.get(url)
	  },
    // 新建保存
    create:function(url, postVo){
        return Vue.http.post(url, postVo)
    }, 
    //删除数据
    deletePost:function(url, id){
        return Vue.http.delete(url, {body: {"id": id}})
    },  
    // 查询单调数据接口，get 直接传含有参数键值对的 params 对象
    getPostDetail:function(url, id){
      return Vue.http.get(url, {
          params: {
              id: id
          }
      })
    }, 
    // post 直接传对象
    update:function(url, postVo){
      return Vue.http.post(url, postVo)
    },          

}

export default userResource;