<template>
  <div class="hello">
     <button @click="login()">调用登录接口获取token</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    console.log('执行created函数')
  },
  methods: {
    login() {
      var url = '/flag/login';
      this.$http.get(url).then(res => {
        console.log(res)
        this.$router.push({path:"/home"});
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
