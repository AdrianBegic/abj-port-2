<template>
  <div class="background">
  <div class="app">
  <img id="desktop-icon-1" src="../assets/images/recycle_bin_empty-4.png">
  <p id="desktop-text">Recycle Bin</p>
  </div>
  <div class="app">
  <a href="https://www.npmjs.com/~adrian_446" style="text-decoration: none; color: inherit;">
  <img id="desktop-icon-2" src="../assets/images/npm.webp">
  <p id="desktop-text">MY NPM PACKAGES</p>
  </a>
  </div>
  <div class="app">
  <a href="https://github.com/AdrianBegic" style="text-decoration: none; color: inherit;">
  <img id="desktop-icon-1" src="../assets/images/git.png">
  <p id="desktop-text">MY GITHUB</p>
  </a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'background'
}
</script>

<style>
.background{
    background-color: #008080;
     width: 100%;
  height: 100vh;
}
.app{
    display: block;
    width: max-content;
}

#desktop-icon-1{
    padding: 20px 20px 0px 20px;
    width: 70px;
}

#desktop-icon-2{
    padding: 20px 20px 0px 20px;
    width: 70px;
}

#desktop-text{
    color: #fff;
    width: 70px;
    text-align: center;
    font-size: .8em;
    padding: 5px 20px 20px 20px;
    margin: 0;
}
</style>
