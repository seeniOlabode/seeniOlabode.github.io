<template>
  <div class="site-background nippo" ref="bgElement">
    <!-- <div
      class="background-row"
      v-for="(mark, i) in waterMarkText"
      :key="mark + 'bg'"
      :style="{ transform: `translateX(${(i + 1) * -220}px)` }"
    >
      <div class="background-wrapper">
        <span class="background-watermark">
          <span class="char" v-for="text in textArray" :key="text">{{
            text
          }}</span>
        </span>
        <span class="background-watermark">
          <span class="char" v-for="text in textArray" :key="text">{{
            text
          }}</span>
        </span>
      </div>
    </div> -->
    <div class="gradient-div"></div>
    <div class="pattern-div"></div>
  </div>
</template>

<script>
export default {
  name: "SiteBackground",
  data() {
    return {
      text: "OLABODE-ODEBUNMI OLUWASEENI",
    };
  },
  computed: {
    waterMarkText() {
      const textArray = [];
      for (let i = 0; i < 10; i++) {
        textArray.push(i);
      }
      return textArray;
    },
    textArray() {
      return this.text.split("");
    },
  },
};
</script>

<style >
.site-background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 80%;
  background: black;
  overflow: hidden;
  user-select: none;
  opacity: 0.5;

  .background-watermark {
    font-size: 150px;
    white-space: nowrap;
    color: black;
    width: 50%;
    line-height: 1;
  }

  .pattern-div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(#13130f 2px, transparent 2px),
      linear-gradient(to right, #13130f 2px, transparent 2px);
    background-size: 33px 33px;
    background-color: #000000;
  }

  .gradient-div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0);
    background: -webkit-radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 20%,
      #000000 100%
    );
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.8) 70%
    );
  }
}

.background-wrapper:nth(odd) {
  animation: marqueeAnimationFirst 10s infinite linear;
  color: red;
}

.background-wrapper:nth(even) {
  animation: marqueeAnimationSecond 10s infinite linear;
}

@keyframes marqueeAnimationFirst {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marqueeAnimationSecond {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>