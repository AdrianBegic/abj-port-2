<template>
  <background />
  <div id="draggable-header" @mousedown="dragMouseDown">
    <div class="main" ref="draggableContainer" id="draggable-container">
      <div class="header">
        <p class="header-title">About Me</p>
        <img
          class="header-icon"
          src="../assets/images/close-icon.png"
          @click="goBack"
        />
        <img class="header-icon" src="../assets/images/question-icon.png" />
      </div>
      <h1 class="content" ref="draggableContainer" id="draggable-container">hello</h1>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import background from "../components/background.vue";

export default {
  name: "about",
  components: {
    background,
  },
  data: function () {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },

    dragMouseDown: function (event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function (event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
  },
};
</script>

<style scoped>
#draggable-container {
  position: absolute;
  z-index: 9;
}
#draggable-header {
  z-index: 10;
}


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

.content {
  height: 63vh;
  width: 48vw;
  position: fixed;
  top: 3vh;
  left: 1vw;
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
