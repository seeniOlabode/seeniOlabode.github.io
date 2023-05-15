<template>
  <div class="loader-container">
    <div class="wrapper" ref="wrapper">
      <h1 class="logo jet-brains">
        <span class="logo-text-wrapper generic-slide-down">
          OLABODE-ODEBUNMI<br />
          OLUWASEENI.
        </span>
      </h1>

      <div class="visual generic-slide-up">
        <div class="outer">
          <div
            class="inner"
            :style="{
              transform: `translateX(${-(100 - loadPercent) + '%'})`,
            }"
          ></div>
        </div>
        <span class="percentage jet-brains">{{ loadPercent }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

import { lerp, select } from "../utils/utils";

const loaderTl = gsap.timeline();

export default {
  name: "SiteLoader",
  data() {
    return {
      time: 0,
      duration: 10000,
    };
  },
  watch: {
    loadPercent(value) {
      if (value == 100) {
        loaderTl.play();
      }
    },
  },
  computed: {
    loadPercent() {
      if (this.time > 9900) {
        return 100;
      } else {
        return Math.floor((this.time / this.duration) * 100);
      }
    },
  },
  methods: {
    load() {
      let prev = 0;

      const easeLoad = () => {
        if (!(this.time >= this.duration) && !(this.time > 9900)) {
          let time = this.time;
          let duration = this.duration;

          this.time = time + prev;
          let lerpAmount =
            (time / duration) * 100 < 80
              ? Math.random() * 0.01
              : Math.random() * 0.5;
          let change = lerp(time, duration, lerpAmount);
          prev = change;

          setTimeout(() => {
            easeLoad();
          }, change);
        }
      };

      easeLoad();
    },
  },
  mounted() {
    this.load();
    const wrapperElement = this.$refs.wrapper;
    const layoutElement = select(".layout-container");
    const wrapperBox = wrapperElement.getBoundingClientRect();

    let halfLeft = layoutElement.clientWidth / 2 - wrapperBox.width / 2;
    let halfTop = layoutElement.clientHeight / 2 - wrapperBox.height / 2;

    gsap.set(wrapperElement, {
      x: halfLeft,
      y: halfTop,
    });

    loaderTl
      .to(".visual", {
        yPercent: 150,
      })
      .set(".visual", {
        display: "none",
      })
      .to(wrapperElement, {
        x: 0,
        y: 0,
        duration: 1,
        fontSize: 18,
        ease: "power4.in",
      })
      .call(() => {
        const containerElement = document.querySelector(".loader-container");
        const layoutElement = document.querySelector(".layout-container");
        containerElement.classList.remove("loader-container");
        containerElement.classList.add("logo-container");
        layoutElement.classList.remove("loading");
        this.$router.push("home");
        this.$emit("site-loaded");
        this.$eventBus.emit("site-loaded");
      })
      .pause();
  },
};
</script>

<style>
@custom-media --medium-viewport (max-width: 800px);
@custom-media --small-viewport (max-width: 650px);

.logo-text-wrapper {
  display: block;
}

.loader-container {
  .wrapper {
    overflow: hidden;
    width: fit-content;
  }

  .logo {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }

  .visual {
    display: flex;
    align-items: end;
    margin-top: 14px;

    .percentage {
      display: inline-block;
      font-size: 14px;
      line-height: 0.7;
      margin-left: 5px;
      text-align: right;
      width: 35px;
    }

    .outer {
      height: 3px;
      border: solid 1px var(--near-white);
      flex-grow: 1;

      .inner {
        height: 100%;
        background: var(--near-white);
        width: 100%;
        transform: translateX(-100%);
      }
    }
  }
}

.logo-container {
  .visual {
    display: none;
  }

  .logo {
    font-size: 18px;
    white-space: nowrap;
  }
}

@media (--small-viewport) {
  .logo-container {
    transition: opacity 0.5s;

    .logo {
      font-size: 14px;
    }
  }

  #app:has(.site-main-nav.open) .logo-container {
    opacity: 0;
  }
}
</style>