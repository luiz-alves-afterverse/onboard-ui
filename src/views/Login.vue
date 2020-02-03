<template>
  <div>
     <div class="centralized">
      <h1>Sign in to win tons of prizes! :D</h1>
    </div>

     <el-row type="flex" justify="center" class="content-container">
      <el-col :span="6" class="form-container">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="Username" prop="username">
            <el-input placeholder="username" v-model="form.username"></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input placeholder="password" v-model="form.password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="submitForm('form')" round>Sign In</el-button>
          </el-form-item>
        </el-form>
      </el-col>
     </el-row>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'login',

    data() {
      return {
        form: {
          username: '',
          password: '',
        },

        rules: {
          username: [
            { required: true, message: 'Username is required', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Password is required', trigger: 'blur' },
          ],
        },
      };
    },

    methods: {
      ...mapActions({signIn: 'signIn'}),

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.authenticate()
          } else {
            this.$message.error("Sorry, your username and/or password input is invalid D:")
          }
        });
      },

      authenticate() {
        this.signIn({ username: this.form.username, password: this.form.password})
        .then(() => this.$router.push('/'))
      },
    }
  }
</script>

<style scoped lang="scss">

h1 {
  color: #ff3e81;
}

.content-container {
  padding-top: 50px;

  .form-container {
    //border: #c1c1c1 dotted 1.5px;
    border: #6e1ea0 dotted 1.5px;
    padding: 20px 20px 20px 20px;
  }
}

</style>