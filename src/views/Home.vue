<template>
  <div class="home">
    <background />
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import background from "../components/background.vue"

export default {
  name: 'Home',
  components: {
    background
  },
}
</script>

<style>

</style>
