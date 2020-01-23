<template>
  <el-row>
  <el-col :span="8" v-for="lottery in lotteries" v-bind:key="lottery.id">
    {{things}}
    <LotteryListCard
      v-bind:id="lottery.id"
      v-bind:name="lottery.name"
      v-bind:prize="lottery.prize">
    </LotteryListCard>
  </el-col>
</el-row>
</template>

<script>
import LotteryListCard from '../components/LotteryListCard.vue'

  export default {
    name: "LotteryList",
    components: {
      LotteryListCard
    },
    created() {
      this.$lotteryService.findAll().then((response) => {
        this.lotteries = response
      })
    },
    data() {
      return {
        lotteries: []
      }
    }
  }
</script>
