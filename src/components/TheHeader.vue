<template>
  <div id="my-header">
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-row type="flex">
          <el-col :span="12" id="logo">
            <router-link to="/" class="router-link">
            LOTTERY
          <!-- <i class="el-icon-s-home"></i> -->
            </router-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row :gutter="20" v-if="this.is_authenticated == true" type="flex" justify="end">
          <el-col :span="12">
            <h3>Credit: {{ this.credit }}</h3>
          </el-col>
          <el-col :span="12">
            <el-button @click="signOut()" round>Sign Out</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20" v-else type="flex" justify="end">
          <el-col :span="12">
            <router-link to="/join">
              <el-button
                size="large"
                round>
                Join Now
              </el-button>
            </router-link>
          </el-col>

          <el-col :span="12">
            <router-link to="/login">
              <el-button
                size="large"
                round>
                Sign In
              </el-button>
            </router-link>
          </el-col>
      </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheHeader',
  
  computed: {
    ...mapState([
      'is_authenticated',
      'credit'
    ])
  },

  methods: {
    ...mapActions ({signOut: 'signOut'})
  }
}
</script>

<style scoped lang="scss">

#my-header {
  width: 100%;
  height: 80px;
  //background-color: #dfa612;
  background-color: #6e1ea0;
  margin-bottom: 30px;
  box-shadow: 5px 10px;
}

#logo {
  font-size: 50px;
  font-weight: bold;
  line-height: 80px;
}

i {
  font-size: 3em;
}

.el-row {
  height: 100%;
}

.el-col {
  vertical-align: middle;
}

.el-button {
  margin-top: 20px;
  background-color: inherit;
  color: #fff;
}

.router-link {
  color: inherit;
  text-decoration: none;
  outline: 0;
}

</style>