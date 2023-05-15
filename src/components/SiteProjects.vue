<template>
  <main>
    <div class="background">
      <h1 class="nippo project-text-bg">
        <span>P</span>
        <span>R</span>
        <span>O</span>
        <span>J</span>
        <span>E</span>
        <span>C</span>
        <span>T</span>
        <span>S</span>
      </h1>
    </div>
    <div class="projects-gallery">
      <div class="projects-gallery-wrapper" ref="galleryWrapper">
        <site-project-card
          class="project-container"
          v-for="proj in projects"
          :key="proj + 'projects'"
          :img="proj"
        />
      </div>
    </div>
    <div class="scroller-div">
      <div class="inner"></div>
    </div>
    <div class="scroll-indicator jet-brains">
      <h4>Scroll Down</h4>
      <span class="scroll-icon">
        <span class="scroll-icon-wrapper">
          <span>
            <img src="../assets/icon-down-arrow.svg" alt="" />
          </span>
          <span>
            <img src="../assets/icon-down-arrow.svg" alt="" />
          </span>
        </span>
      </span>
    </div>
  </main>
</template>

<script>
import SiteProjectCard from "./SiteProjectCard.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { getPercent } from "../utils/utils";

let projectsTl = gsap.timeline({});

export default {
  name: "SiteProjects",
  data() {
    return {
      projects: [
        "markdown",
        "password-generator",
        "scelloo-datatable",
        "developer-portfolio",
      ],
    };
  },
  components: {
    SiteProjectCard,
  },
  mounted() {
    const wrapperElement = this.$refs.galleryWrapper;
    let wrapW = wrapperElement.clientWidth;
    let wrapScrollW = wrapperElement.scrollWidth;
    let paddingSize = getPercent(wrapW, 30);

    let percentToScroll = -(wrapScrollW / (wrapW + paddingSize)) * 100;

    ScrollTrigger.create({
      trigger: "#app",
      animation: projectsTl,
      scrub: true,
      pin: true,
    });
    projectsTl.to(wrapperElement, {
      duration: 6,
      xPercent: percentToScroll,
      ease: "linear",
    }),
      ">";
    projectsTl
      .to(
        ".scroller-div .inner",
        {
          x: 0,
          duration: 6,
          ease: "linear",
        },
        "<"
      )
      .pause();

    console.log(ScrollTrigger.getAll());
  },
  beforeUnmount() {
    ScrollTrigger.killAll();
    projectsTl.kill();
  },
};
</script>

<style scoped>
.scroll-indicator {
  display: flex;
  gap: 10px;
  position: absolute;
  right: 0;
  bottom: 0;

  > h4 {
    margin: 0;
    font-size: 14px;
  }

  .scroll-icon {
    overflow-y: hidden;
    height: 20px;
    .scroll-icon-wrapper {
      display: flex;
      flex-direction: column;
      transform: translateY(-50%);
      height: 40px;
      animation: scrollDown 0.6s infinite cubic-bezier(0.59, 0, 0.28, 1);

      > span {
      }
    }

    @keyframes scrollDown {
      100% {
        transform: translateY(0);
      }
    }
  }
}
.scroller-div {
  height: 5px;
  width: 500px;
  border: 1px solid var(--near-white);
  position: absolute;
  bottom: 7px;
  display: flex;
  overflow: hidden;

  .inner {
    height: 100%;
    width: 100%;
    background: var(--near-white);
    transform: translateX(-100%);
  }
}

main {
  /* overflow: hidden; */
}
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -10;
}
.project-text-bg {
  opacity: 0.15;
  font-size: 150px;
  color: #fffff7;
  overflow-y: hidden;

  @for $i from 1 to 8 {
    span:nth-child($(i)) {
      --animation-delay: calc(($(i) - 1) * 0.025s);
      animation-delay: var(--animation-delay);

      /* &::before {
        content: "$(i)";
        display: inline;
      } */
    }
  }

  @keyframes textBgSpan {
    100% {
      transform: translateY(0);
    }
  }

  span {
    display: inline-block;
    animation: textBgSpan 0.3s;
    animation-fill-mode: forwards;
    transform: translateY(-100%);
  }
}

.projects-gallery {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: -1;
  animation: slideInProjects 1s;
  animation-fill-mode: forwards;
  animation-delay: 0.6;
  transform: translateX(100%);

  @keyframes slideInProjects {
    100% {
      transform: translateX(0);
    }
  }
}

.projects-gallery-wrapper {
  display: flex;
  gap: 300px;
  padding-left: 85%;
  padding-right: 85%;
  width: 100%;
  overflow: visible;
}
</style>