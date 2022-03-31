<template>
<background/>
  <div class="main">
    <div class="header">
      <p class="header-title">About Me</p>
      <img
        class="header-icon"
        src="../assets/images/close-icon.png"
        @click="goBack"
      />
      <img
        class="header-icon"
        src="../assets/images/question-icon.png"
      />
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import background from '../components/background.vue'

export default {
  name: 'about',
  components:{
      background
  },

  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.main {
  height: 70vh;
  width: 50vw;
  position: fixed;
  top: 15vh;
  left: 25vw;
  background-color: #c6c6c6;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-top: solid 2px #fff;
  border-bottom: solid 2px #000;
}

.content{
  height: 63vh;
  width: 48vw;
  position: fixed;
  top: 20vh;
  left: 26vw;
  background-color: #c6c6c6;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-top: solid 2px #fff;
  border-bottom: solid 2px #000;
  overflow-y: scroll;
}

.header {
  background-color: #000080;
  height: 4%;
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
  float: right;
  letter-spacing: 0.05em;
  margin: 4px 3px;
  border-left: 2px solid #ededed;
  border-top: 2px solid #ededed;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  height: 14px;
  width: 14px;
  position: relative;
  color: #000;
  background-color: silver;
  cursor: pointer;
}
</style>
