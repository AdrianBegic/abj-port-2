
<template>
  <div class="footer">
    <div class="start">
    <router-link  style="text-decoration: none; color: inherit;" to="/Desktop">
      <img id="start-button" src="../assets/images/start.webp" />
       </router-link>
    </div>
    <div class="vl"></div>
    <div class="vl2"></div>
    <div class="about">
    <router-link  style="text-decoration: none; color: inherit;" to="/About">
      <img id="about-image" src="../assets/images/address_book_user.png" />
      <h2 class="about-text">About me</h2>
    </router-link>
    </div>
    <div class="about">
    <router-link  style="text-decoration: none; color: inherit;" to="/About">
      <img id="about-image" src="../assets/images/computer-5.png" />
      <h2 class="about-text">My projects</h2>
    </router-link>
    </div>
    <div class="vl"></div>
    <div class="vl2"></div>
    <div class="clock">
    <img id="time-image" src="../assets/images/calendar-3.png" />
      <h1 class="time">{{time}}</h1>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "footerBar",
  data() {
    return {
      time: null,
    };
  },
   methods: {
    tick() {
      this.time = new Date().toLocaleTimeString()
    },
  },
  created () {
    this.time = new Date().toLocaleTimeString()
    setInterval(this.tick, 1000)
  }
};
</script>

<style>
.footer {
  width: 100%;
  height: 5vh;
  background-color: #c0c0c0;
  position: absolute;
  bottom: 0;
  border-top: solid 3px #fff;
  z-index: 1;
}
.start {
  float: left;
  width: 100px;
  height: 70%;
  margin: 5px 3px 0px 3px;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-top: solid 2px #fff;
  border-bottom: solid 2px #000;
}

#start-button {
  width: 90%;
  cursor: pointer;
}

.start:hover{
        opacity: 0.8;
      }

.about {
  float: left;
  width: 150px;
  height: 70%;
  margin: 5px 5px 0px 5px;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-top: solid 2px #fff;
  border-bottom: solid 2px #000;
}

#about-image {
  float: left;
  height: 100%;
}

.about:hover{
        opacity: 0.8;
      }

.about-text{
  font-size: 1em;
  margin: 0 auto;
  text-align: center;
  padding: 8px 0px;
}


.vl {
  float: left;
  border-left: 2px solid #808080;
  height: 80%;
  margin: 4px 0px;
}

.vl2 {
  float: left;
  border-left: 2px solid #fff;
  height: 80%;
  margin: 4px 0px;
}

.clock {
  background-color: #c0c0c0;
  float: right;
  width: 180px;
  height: 70%;
  margin: 5px 5px 0px 5px;
  border-left: solid 2px #424242;
  border-right: solid 2px #fff;
  border-top: solid 2px #424242;
  border-bottom: solid 2px #fff;
}

.time {
  text-align: center;
  font-size: 1.5em;
  margin: 0 auto;
  padding: 5px 0;
  text-transform: uppercase;
}

#time-image {
  float: left;
  height: 90%;
  padding: 1px 0px;
}
</style>
