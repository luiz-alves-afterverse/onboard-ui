<template>
  <div class="login">
    <el-input placeholder="username" v-model="username"></el-input>
    <el-input placeholder="password" v-model="password" show-password></el-input>
    <el-button>Login</el-button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>