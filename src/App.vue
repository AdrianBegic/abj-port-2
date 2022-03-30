<template>
  <router-view/>
  <footerBar/>
</template>

<script>
import footerBar from './components/footerBar.vue'

export default {
  components: {
    footerBar
  }
}
</script>

<style>
@font-face {
    font-family: 'Windows'; /*a name to be used later*/
    src: url('./assets/MS Sans Serif 8pt.ttf'); /*URL to font*/
}

*{
  font-family: 'Windows', monospace;
}

body{
  margin: 0;
  padding: 0;
}
</style>
