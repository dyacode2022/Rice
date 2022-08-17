<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Rice from './components/Rice.vue'
import Nav from './components/nav.vue'
import Search from './pages/Search.vue'
</script>

<template>
  <Nav />
  <!-- <Search /> -->

  <!-- <RouterLink to="/info/포항제철중학교">info</RouterLink> -->

  <RouterView />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* padding: 40px; */
  /* background: #e0e0e0; */
}
</style>
