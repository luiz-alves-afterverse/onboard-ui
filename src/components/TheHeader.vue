<template>
  <div id="my-header">
    <el-row type="flex" justify="center">
      <el-col :span="15">
        <el-row v-if="this.credit != null" type="flex" justify="end">
          <el-col :span="3">
            <h3>Credit: {{ this.credit }}</h3>
          </el-col>
        </el-row>
        <el-row v-else type="flex" justify="end">
          <el-col :span="3">
            <router-link to="/join">
              <el-button
                size="large"
                plain>
                Join Now
              </el-button>
            </router-link>
          </el-col>

          <el-col :span="3">
            <router-link to="/login">
              <el-button
                size="large"
                plain>
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
export default {
  name: 'TheHeader',
  created() {
    this.$creditService.find()
    .then((response) => {
      this.credit = response.credit
    }).catch(() => this.credit = null)
  },
  data() {
    return {
      credit: null
    };
  },
}
</script>

<style scoped lang="scss">
#my-header {
  width: 100%;
  background-color: #dfa612;
  margin-bottom: 30px;
}

.el-col {
  padding: 15px;
}

</style>