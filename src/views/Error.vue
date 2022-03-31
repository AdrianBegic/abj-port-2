<template>
  <div class="container">
    <div class="msg" align="center">
      <p class="highlight">Windows</p>
      <p>
        A fatal exception 0E has occured at 028:C00068F8 in VxD VMM(01)
        000059F8. The current application will be terminated.
      </p>
      <p>* Press any key to terminate the application.</p>
      <p>
        * Press CTRL+ALT+DEL to restart your computer. You will lose any unsaved
        information in all aplications.
      </p>
      <br />
      <p class="continue">
        Press any key to continue <span class="blink">_</span>
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'error',
  created () {
    window.addEventListener('keypress', (e) => {
      return this.$router.go(-1);
      close();
    })
  },
  methods: {
      close () {
         if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
    }
  },
}
</script>

<style scoped>

body {
  background-color: rgb(1, 2, 172);
  color: white;
}

.container {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background-color: rgb(1, 2, 172);
  z-index: 999;
}

.msg {
  margin: 0 auto;
}

p {
  text-align: left;
}

.continue {
  text-align: center;
}

.highlight {
  color: rgb(1, 2, 172);
  background-color: rgb(172, 173, 168);
  padding: 3px;
  text-align: center;
  width: 150px;
}

.blink {
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
