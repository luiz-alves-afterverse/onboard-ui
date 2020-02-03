<template>
  <div>
     <div class="centralized">
      <h1>Join the fun now!</h1>
    </div>

     <el-row type="flex" justify="center" class="content-container">
      <el-col :span="6" class="form-container">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="Username" prop="username">
            <el-input placeholder="username" v-model="form.username"></el-input>
          </el-form-item>

          <el-form-item label="Email" prop="email">
            <el-input placeholder="email" v-model="form.email"></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input placeholder="password" v-model="form.password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="submitForm('form')">Join</el-button>
          </el-form-item>
        </el-form>
      </el-col>
     </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: 'join',

    data() {
      return {
        form: {
          username: '',
          email: '',
          password: '',
        },

        rules: {
          username: [
            { required: true, message: 'Username is required', trigger: 'blur' },
            { min: 3, max: 64, message: 'Length should be 3 to 64', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'Username is required', trigger: 'blur' },
            {type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          password: [
            { required: true, message: 'Password is required', trigger: 'blur' },
          ]
        },
      };
    },

    methods: {
      ...mapActions({signIn: 'signIn'}),

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.createUser()
          } else {
            this.$message.error("Sorry, your username and/or password input is invalid D:")
          }
        });
      },

      createUser() {
        this.$userService.create(this.form.username, this.form.email, this.form.password)
        .then((response) => {
          if (response) {
            this.$message({message: "Account created :D", type: 'success'})
            this.signIn(this.form.username, this.form.password)
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

h1 {
  color: #ff3e81;
}

.content-container {
  padding-top: 50px;

  .form-container {
    border: #6e1ea0 dotted 1.5px;
    padding: 20px 20px 20px 20px;
  }
}

</style>