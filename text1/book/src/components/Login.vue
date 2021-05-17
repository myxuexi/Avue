<template>
  <div class="login">
    <el-card class=box>
      <div class="ha">
        <span>系统登录</span>
        <el-button style="float: right; padding: 3px 0" type="text">忘记密码</el-button>
      </div>
      <div class="pas">
        <span>用户名</span>
        <el-input v-model="h1" placeholder="请输入学号" ></el-input>
        <span>密  码</span>
        <el-input v-model="h2" placeholder="请输入密码" show-password ></el-input>
        <el-button @click="send">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
      return {
        h1: '',
        h2: ''
      }
    },
    name:"login",
  methods: {
    send(){
      Axios.get('http://localhost:3000/login').then(function(send){
        console.log("你已连接");
      })
      }
    },
  
  
};
</script>

<style>
.box{
  width: 450px;
  height: 500px;
  position: relative;
  left: 30%;
}
.login{
  padding-top: 2%;
}
.pas{
  height: 400px;
  width: 200px;
  position: relative;
  top: 50px;
  left: 98px;
}

</style>