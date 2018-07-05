
import Vue from 'vue'

let userResource = {
	//获取所有数据
  getPostList:function(url){
    return Vue.http.get(url)
  },
  
}

export default userResource;