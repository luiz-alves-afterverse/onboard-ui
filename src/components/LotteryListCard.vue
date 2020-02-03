<template>
  <el-card :body-style="{ padding: '0px' }">
      <div class="upper">
        <el-row>
          <h1>{{ name }}</h1>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-row>
              <h2>Ticket Price: {{ ticketPrice }}</h2>
            </el-row>
          </el-col>
          <el-col :offset="8" :span="8">
            <el-row>
              <h2>Prize: {{ prize }}</h2>
            </el-row>
          </el-col>
        </el-row>
      </div>

      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <!-- <time class="time">{{ prize }}</time> -->
          <el-row>
            <el-col :span="8">
              <h3>Number of tickets</h3>
            </el-col>
            <el-col :span="4">
              <el-input-number v-model="numOfTickets" :min="1"></el-input-number>
            </el-col>
            <el-col :offset="6" :span="6">
              <el-row>
                <el-button @click="buyTickets()" type="success">Buy now for {{ numOfTickets * ticketPrice }}</el-button>
              </el-row>
            </el-col>
          </el-row>
        </div>
    </div>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: "LotteryListCard",

    props: {
      id: Number,
      name: String,
      prize: Number,
      ticketPrice: Number
    },

    data() {
      return {
        numOfTickets: 0
      };
    },

    methods: {
      ...mapActions({fetchCredit: 'fetchCredit'}),

      buyTickets() {
        this.$ticketService.create(this.id, this.numOfTickets)
          .then(this.fetchCredit())
          .catch((error) => this.$message.error(error))
      }
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

  .upper {
    width: 100%;
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