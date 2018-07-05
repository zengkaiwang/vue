
import Vue from 'vue'

let userResource = {
		//获取所有数据
	  getPostList:function(url){
	    	return Vue.http.get(url)
	  },
    // 新建保存
    cteate:function(url, postVo){
        return Vue.http.post(url, postVo)
    },  

}

export default userResource;