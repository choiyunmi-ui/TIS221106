<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <child1 />
    <child2 />
  </div>
</template>

<script>
import CompChild1 from '../components/vue3701/CompChild1.vue';
import CompChild2 from '../components/vue3701/CompChild2.vue';

export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    child1: CompChild1,
    child2: CompChild2,
  },
};
</script>
