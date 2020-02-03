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

body {
  margin: 0;
}

#app {
  font-family: Arial, Helvetica, 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

.centralized {
      text-align: center;
    }

button.is-plain:hover {
  //color: #ff3e81;
  color: #fff;
  //background-color: inherit;
  background-color: #ff3e81;
  border-color: #ff3e81;
}

button.is-round:hover {
  //color: #ff3e81;
  color: #fff;
  //background-color: inherit;
  background-color: #ff3e81;
  border-color: #ff3e81;
}

button.is-round:focus {
  //color: #ff3e81;
  color: #fff;
  //background-color: inherit;
  background-color: #ff3e81;
  border-color: #ff3e81;
}

</style>
