<template>
  <el-row>
  <el-col :span="8" v-for="lottery in lotteries" v-bind:key="lottery.id">
    <LotteryListCard
      v-bind:id="lottery.id"
      v-bind:name="lottery.name"
      v-bind:prize="lottery.valor">
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
    data() {
      return {
        lotteries: [
          {
            id: 1,
            name: "batatinha",
            valor: 50
          },
          {
            id: 2,
            name: "ventiladorzao",
            valor: 100
          }
        ]
      }
    }
  }
</script>
