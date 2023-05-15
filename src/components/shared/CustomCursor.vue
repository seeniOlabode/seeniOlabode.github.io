<template>
  <div class="cursor-element" ref="cursor">
    <div class="inner"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";

import { lerp } from "../../utils/utils";

const pos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
const mouse = {
  x: 0,
  y: 0,
};

let element = null;

let xSet = null;
let ySet = null;
let speed = 0.2;

const animate = () => {
  element = document.querySelector(".cursor-element");

  if (!ySet && !xSet) {
    xSet = gsap.quickSetter(element, "x", "px");
    ySet = gsap.quickSetter(element, "y", "px");
  }

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    xSet(pos.x);
    ySet(pos.y);
  });
};

export default {
  name: "CustomCursor",
  data() {
    return {
      mounted: false,
    };
  },
  watch: {
    // mouse: {
    //   handler: (value) => {
    //     if (this.mounted) {
    //       const cursorElement = this.$refs.cursor;
    //       this.mouse.x += lerp(value.x, this.mouse.x, 0.075);
    //       this.mouse.y += lerp(value.y, this.mouse.y, 0.075);
    //       cursorElement.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px)`;
    //     }
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener("mousedown", (e) => {
      this.$refs.cursor.classList.add("cursor-element-active");
    });
    window.addEventListener("mouseup", (e) => {
      this.$refs.cursor.classList.remove("cursor-element-active");
    });
    animate();
  },
};
</script>

<style >
.cursor-element {
  width: 4px;
  height: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100000;
  opacity: 0.7;
  mix-blend-mode: screen;
  pointer-events: none;
  border-radius: 100%;
  background: #fffff7;
  display: flex;

  .inner {
    flex-grow: 1;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    transition: transform 1s;
  }
}
</style>