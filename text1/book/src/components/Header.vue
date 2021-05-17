<template>
  <div id="headerBook">
    <router-link to="/">
    <div id="headtitle">
      {{ message }}
    </div></router-link>
    <div id="head">
      <el-row>
        <router-link to="/register"><el-button>注册界面</el-button></router-link>
        <router-link to="/login"><el-button>登陆界面</el-button></router-link>
        <router-link to="/work"><el-button>工作界面</el-button></router-link>
        <router-link to="/student"><el-button>学生界面</el-button></router-link>
        <router-link to="/book"><el-button>书籍界面</el-button></router-link>
        <router-link to="/cnnode"><el-button>node论坛</el-button></router-link>

      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBook",
  data() {
    return {
      message: "江西软件大学——新型图书管理系统",
    };
  },
};
</script>

<style>
#headerBook {
  background-color: red;
  height: 60px;
}
#headtitle {
  position: absolute;
  background-color: blue;
  width: 400px;
  height: 60px;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  display: flex;
  display: inline-block;
}

#head {
  width: 600px;
  height: 60px;
  display: inline-block;
  float: right;
}
.el-row {
  text-align: center;
  line-height: 60px;
}
.el-row > .el-button {
  color: red;
}
</style>