
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

}

export default userResource;