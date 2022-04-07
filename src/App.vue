<template>
  <router-view/>
  <footerBar v-if="!$route.meta.hideFooter"/>
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
    font-family: 'Windows';
    src: url('./assets/MS Sans Serif 8pt.ttf');
}

*{
  font-family: 'Windows', monospace;
}

html {
  overflow: hidden;
}

body{
  margin: 0;
  padding: 0;
}

.home {
  background-color: #008080;
  width: 100%;
  height: 100vh;
}
</style>
