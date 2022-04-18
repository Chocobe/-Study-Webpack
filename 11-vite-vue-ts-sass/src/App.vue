<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <div class="myApp">
    <h1 class="myApp-title">
      Hello World
    </h1>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.myApp {
  @apply mt-2;
  @apply py-2 px-5;
  
  border: 2px solid #ff1493;

  &-title {
    @apply font-black;
    @apply text-pink-400;

    font-size: 30px;
  }
}
</style>
