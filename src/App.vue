<template lang="pug">
img(alt="Vue logo", src="./assets/logo.png")
hello-world(msg="Hello Vue 3 + Vite")
router-view(v-slot="{Component}")
  transition(name="fade")
    component(:is="Component")
</template>

<script setup lang="ts">
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>