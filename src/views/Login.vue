<template>
  <div>
     <div class="centralized">
      <h1>Sign in to Lottery</h1>
    </div>

    <div class="centralized">
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <span>Inserir frase aqui</span>
        </el-col>
      </el-row>
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
            <el-button @click="submitForm('form')">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
     </el-row>
  </div>
</template>

<script>
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
        this.$authenticationService.signIn(this.form.username, this.form.password)
        .then((response) => {
          if (response) {
            this.$message({message: "Welcome back :)", type: 'success'})
            this.$router.push('/')
          }
          else
            this.$message.error("Oooops, something really went wrong :/")
        })
        .catch((error) => {
            this.$message.warning(error.status.toString())
        });
      },
    }
  }
</script>

<style scoped lang="scss">

.content-container {
  padding-top: 50px;

  .form-container {
    border: #c1c1c1 dotted 1.5px;
    padding: 20px 20px 20px 20px;
  }
}

</style>