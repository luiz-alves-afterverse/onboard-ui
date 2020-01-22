<template>
  <div id="my-header">
    <el-row>
      <el-col :span="3" :offset="18">
        <router-link to="/login">
          <el-button
            size="medium"
            type="primary">
            Sign In
          </el-button>
        </router-link>
      </el-col>

      <el-col :span="3">
        <el-button
          size="medium"
          type="primary">
          Sign Up
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="scss">
#my-header {
  width: 100%;
  background-color: deeppink;
}

.el-col {
  padding: 15px;
}

</style>