<template>
  <div class="background">
    <div class="app">
    </div>
    <div class="app">
      <router-link
        style="text-decoration: none; color: inherit"
        to="/Error"
        @click="fullscreen"
      >
        <img
          id="desktop-icon-1"
          src="../assets/images/recycle_bin_empty-4.png"
        />
        <p id="desktop-text">Recycle Bin</p>
      </router-link>
    </div>
    <div class="app">
      <a
        href="https://www.npmjs.com/~adrian_446"
        style="text-decoration: none; color: inherit"
      >
        <img id="desktop-icon-2" src="../assets/images/npm.webp" />
        <p id="desktop-text">My Npm Packages</p>
      </a>
    </div>
    <div class="app">
      <a
        href="https://github.com/AdrianBegic"
        style="text-decoration: none; color: inherit"
      >
        <img id="desktop-icon-1" src="../assets/images/git.webp" />
        <p id="desktop-text">My Github</p>
      </a>
    </div>
    <div class="app">
      <a
        href="http://snowdayestimator.com"
        style="text-decoration: none; color: inherit"
      >
        <img id="desktop-icon-1" src="../assets/images/snowflake.webp" />
        <p id="desktop-text">Snowday Estimator</p>
      </a>
    </div>
    <div class="app">
      <a
        href="https://adrianbegic.github.io/skate-config/"
        style="text-decoration: none; color: inherit"
      >
        <img id="desktop-icon-3" src="../assets/images/skateboard.webp" />
        <p id="desktop-text">Skateboard Configurator</p>
      </a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'background',
  data () {
    return {
      elem: document.documentElement
    }
  },

  methods: {
    fullscreen () {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen ();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Safari */
        this.elem.webkitRequestFullscreen ();
      } else if (this.elem.msRequestFullscreen) {
        /* IE11 */
        this.elem.msRequestFullscreen ();
      }
    },

  },
};
</script>

<style>
.background {
  background-color: #008080;
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: relative;
}
.app {
  display: block;
  width: max-content;
}

.app:hover {
  background-color: #a8d1df;
  -webkit-box-shadow: inset 0px 0px 0px 3px #85c9e9;
  -moz-box-shadow: inset 0px 0px 0px 3px #85c9e9;
  box-shadow: inset 0px 0px 0px 3px #85c9e9;
}

#desktop-icon-1 {
  padding: 20px 20px 0px 20px;
  width: 50px;
}

#desktop-icon-2 {
  padding: 20px 20px 0px 20px;
  width: 50px;
}

#desktop-icon-3 {
  padding: 20px 20px 0px 20px;
  width: 60px;
}

#desktop-text {
  color: #fff;
  width: 50px;
  text-align: center;
  font-size: 0.8em;
  padding: 5px 20px 20px 20px;
  margin: 0;
}
</style>
