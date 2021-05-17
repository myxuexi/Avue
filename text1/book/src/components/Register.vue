<template>
  <div class="login1">
    <el-card class=box1>
      <div class="ha1">
        <span>学生注册</span>
      </div>
      <div class="pas1">
        <span>用户名</span>
        <el-input v-model="username" placeholder="请输入学号" ></el-input>
        <span>密  码</span>
        <el-input v-model="password" placeholder="请输入密码" show-password ></el-input>
        <el-button @click="addUser">注册</el-button>
        <p></p>
        <el-button @click="changeMsg">查询</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name:"register",
  data() {
      return {
        
         username: "",
         password: ""
        
      }
    },
 methods: {
      addUser() {
        var name = this.username;
        var password = this.password;
        Axios.post('http://localhost:3000/api/addUser', {
          username: name,
          password: password
        }, {}).then((response) => { console.log(response); })
      },
  
      changeMsg () {
        Axios.get('http://localhost:3000/api/query').then((response) => {
            console.log(response)
            console.log('--------')
        })
      },
     } 
 
};
</script>

<style>
.box1{
  width: 450px;
  height: 500px;
  position: relative;
  left: 30%;
}
.login1{
  padding-top: 2%;
}
.pas1{
  height: 400px;
  width: 200px;
  position: relative;
  top: 50px;
  left: 98px;
}

</style>
