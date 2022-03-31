<template>
<div class="color">
  <div class="main">
    <div class="header">
      <p class="header-title">Login</p>
    </div>
    <img id="logo" src="../assets/images/Windows_98_logo.svg.png">
    <div class="content">
    <div class="option" :style="isSelected ? { 'background-color': '#000080' , 'color': '#fff' } : null" @click="toggleIsSelected">guest</div>
    </div>
    <p class="box-title">Select user name</p>
    <router-link class="header-icon" style="text-decoration:none;color:inherit;text-align:center" to="/Desktop">OK</router-link>

      <button class="header-icon-2">Cancel</button>
  </div>
  </div>
</template>

<script>
/* eslint-disable*/

export default {
  name: 'Login',
  components:{
  },
  data() {
      return {
          isSelected: false
      }
  },

  methods: {
    toggleIsSelected () {
    this.isSelected = !this.isSelected
  }
  },
};
</script>

<style scoped>
.color{
  background-color: #008080;
  width: 100%;
  height: 100vh;
}

#logo{
    width: 80%;
    margin: 20px;
}

.main {
  height: 50vh;
  width: 30vw;
  position: fixed;
  top: 20vh;
  left: 35vw;
  background-color: #c6c6c6;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-top: solid 2px #fff;
  border-bottom: solid 2px #000;
}

.content{
  height: 20vh;
  width: 25vw;
  position: fixed;
  top: 40vh;
  left: 37.5vw;
  background-color: #fff;
  border-left: solid 2px #4F4F4F;
  border-right: solid 2px #fff;
  border-top: solid 2px #4F4F4F;
  border-bottom: solid 2px #fff;
  overflow-y: hidden;
}

.content:before{
  background: none;
  border: 1px solid #C0C0C0;
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  pointer-events: none;
}

.option{
    padding: 4px;
}

.header {
  background-color: #000080;
  height: 5%;
  width: auto;
  margin: 3px;
}

.header-title {
  float: left;
  margin: 0 auto;
  color: #fff;
  padding: 5px 7px;
}

.header-icon {
  position: fixed;
  top: 64vh;
  left: 50vw;
  letter-spacing: 0.05em;
  font-size: 1.5em;
  margin: 4px 4px;
  padding:2px;
  border-left: 2px solid #ededed;
  border-top: 2px solid #ededed;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  height: auto;
  width: 5vw;
  color: #000;
  background-color: silver;
  cursor: pointer;
}
.header-icon-2 {
  position: fixed;
  top: 64vh;
  left: 56vw;
  letter-spacing: 0.05em;
  font-size: 1.5em;
  text-align:center;
  margin: 4px 4px;
  padding:2px;
  border-left: 2px solid #ededed;
  border-top: 2px solid #ededed;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  height: auto;
  width: 8vw;
  color: #000;
  background-color: silver;
  cursor: pointer;
}

.header-icon:hover{
    opacity: 0.8;
}

.header-icon-2:hover{
    opacity: 0.8;
}

.box-title{
    margin: 0 auto;
    position: fixed;
    top: 37vh;
    left: 38vw
}

 
</style>
