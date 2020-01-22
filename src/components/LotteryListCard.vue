<template>
  <el-card :body-style="{ padding: '0px' }">
      <div class="image">
        <span>{{ name }}</span>
      </div>
      <div style="padding: 14px;">
        <span>{{ name }}</span>
      <div class="bottom clearfix">
        <time class="time">{{ prize }}</time>
        <el-button type="text" class="button">Operating</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "LotteryListCard",
    props: {
      id: Number,
      name: String,
      prize: Number
    }
  }
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 200px;
    background-color: teal;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>