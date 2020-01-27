<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'app',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
@import '~element-ui/packages/theme-chalk/src/button';

.button {
  background-color: deeppink;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.centralized {
      text-align: center;
    }

</style>
